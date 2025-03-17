__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 1594,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 28,
            "value": "string",
            "raw": "\"string\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 44,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
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
      "type": "IfStatement",
      "start": 86,
      "end": 166,
      "test": {
        "type": "Literal",
        "start": 90,
        "end": 94,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 96,
        "end": 128,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 103,
            "end": 115,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 109,
                "end": 114,
                "id": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 113,
                  "end": 114,
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
            "type": "ExpressionStatement",
            "start": 120,
            "end": 126,
            "expression": {
              "type": "AssignmentExpression",
              "start": 120,
              "end": 125,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 134,
        "end": 166,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 141,
            "end": 153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 147,
                "end": 152,
                "id": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "c",
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
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 158,
            "end": 164,
            "expression": {
              "type": "AssignmentExpression",
              "start": 158,
              "end": 163,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 168,
      "end": 213,
      "test": {
        "type": "Literal",
        "start": 175,
        "end": 179,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 181,
        "end": 213,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 188,
            "end": 200,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 194,
                "end": 199,
                "id": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 198,
                  "end": 199,
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
            "type": "ExpressionStatement",
            "start": 205,
            "end": 211,
            "expression": {
              "type": "AssignmentExpression",
              "start": 205,
              "end": 210,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 215,
      "end": 263,
      "body": {
        "type": "BlockStatement",
        "start": 218,
        "end": 249,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 224,
            "end": 236,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 235,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 234,
                  "end": 235,
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
            "type": "ExpressionStatement",
            "start": 241,
            "end": 247,
            "expression": {
              "type": "AssignmentExpression",
              "start": 241,
              "end": 246,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 257,
        "end": 261,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 272,
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
      "start": 274,
      "end": 316,
      "object": {
        "type": "Identifier",
        "start": 280,
        "end": 283,
        "name": "obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 285,
        "end": 316,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 291,
            "end": 303,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 297,
                "end": 302,
                "id": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 301,
                  "end": 302,
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
            "type": "ExpressionStatement",
            "start": 308,
            "end": 314,
            "expression": {
              "type": "AssignmentExpression",
              "start": 308,
              "end": 313,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 312,
                "end": 313,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 318,
      "end": 378,
      "init": {
        "type": "VariableDeclaration",
        "start": 323,
        "end": 332,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 327,
            "end": 332,
            "id": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 331,
              "end": 332,
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
        "start": 334,
        "end": 340,
        "left": {
          "type": "Identifier",
          "start": 334,
          "end": 335,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 338,
          "end": 340,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 342,
        "end": 345,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 342,
          "end": 343,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 347,
        "end": 378,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 353,
            "end": 365,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 364,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 363,
                  "end": 364,
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
            "type": "ExpressionStatement",
            "start": 370,
            "end": 376,
            "expression": {
              "type": "AssignmentExpression",
              "start": 370,
              "end": 375,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 380,
      "end": 430,
      "left": {
        "type": "VariableDeclaration",
        "start": 385,
        "end": 391,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 389,
            "end": 391,
            "id": {
              "type": "Identifier",
              "start": 389,
              "end": 391,
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
        "start": 395,
        "end": 397,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 399,
        "end": 430,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 405,
            "end": 417,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 411,
                "end": 416,
                "id": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 415,
                  "end": 416,
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
            "type": "ExpressionStatement",
            "start": 422,
            "end": 428,
            "expression": {
              "type": "AssignmentExpression",
              "start": 422,
              "end": 427,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 432,
      "end": 480,
      "test": {
        "type": "Literal",
        "start": 436,
        "end": 440,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 442,
        "end": 480,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 448,
            "end": 467,
            "body": {
              "type": "VariableDeclaration",
              "start": 455,
              "end": 467,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 461,
                  "end": 466,
                  "id": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 465,
                    "end": 466,
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
              "start": 448,
              "end": 453,
              "name": "label",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 472,
            "end": 478,
            "expression": {
              "type": "AssignmentExpression",
              "start": 472,
              "end": 477,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 472,
                "end": 473,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 476,
                "end": 477,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 482,
      "end": 551,
      "test": {
        "type": "Literal",
        "start": 489,
        "end": 494,
        "value": false,
        "raw": "false"
      },
      "body": {
        "type": "BlockStatement",
        "start": 496,
        "end": 551,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 502,
            "end": 538,
            "body": {
              "type": "LabeledStatement",
              "start": 510,
              "end": 538,
              "body": {
                "type": "LabeledStatement",
                "start": 518,
                "end": 538,
                "body": {
                  "type": "VariableDeclaration",
                  "start": 526,
                  "end": 538,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 532,
                      "end": 537,
                      "id": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 533,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 536,
                        "end": 537,
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
                  "start": 518,
                  "end": 524,
                  "name": "label4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "label": {
                "type": "Identifier",
                "start": 510,
                "end": 516,
                "name": "label3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 502,
              "end": 508,
              "name": "label2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 543,
            "end": 549,
            "expression": {
              "type": "AssignmentExpression",
              "start": 543,
              "end": 548,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 547,
                "end": 548,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "TryStatement",
      "start": 574,
      "end": 691,
      "block": {
        "type": "BlockStatement",
        "start": 578,
        "end": 609,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 584,
            "end": 596,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 590,
                "end": 595,
                "id": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 591,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 594,
                  "end": 595,
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
            "type": "ExpressionStatement",
            "start": 601,
            "end": 607,
            "expression": {
              "type": "AssignmentExpression",
              "start": 601,
              "end": 606,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 601,
                "end": 602,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 610,
        "end": 651,
        "param": {
          "type": "Identifier",
          "start": 617,
          "end": 618,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "BlockStatement",
          "start": 620,
          "end": 651,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 626,
              "end": 638,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 632,
                  "end": 637,
                  "id": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "name": "c",
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
              "type": "ExpressionStatement",
              "start": 643,
              "end": 649,
              "expression": {
                "type": "AssignmentExpression",
                "start": 643,
                "end": 648,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 644,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 648,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": {
        "type": "BlockStatement",
        "start": 660,
        "end": 691,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 666,
            "end": 678,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 672,
                "end": 677,
                "id": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 676,
                  "end": 677,
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
            "type": "ExpressionStatement",
            "start": 683,
            "end": 689,
            "expression": {
              "type": "AssignmentExpression",
              "start": 683,
              "end": 688,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 687,
                "end": 688,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "SwitchStatement",
      "start": 703,
      "end": 780,
      "discriminant": {
        "type": "Literal",
        "start": 711,
        "end": 712,
        "value": 0,
        "raw": "0"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 720,
          "end": 778,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 736,
              "end": 748,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 742,
                  "end": 747,
                  "id": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 743,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 746,
                    "end": 747,
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
              "type": "ExpressionStatement",
              "start": 757,
              "end": 763,
              "expression": {
                "type": "AssignmentExpression",
                "start": 757,
                "end": 762,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 757,
                  "end": 758,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 762,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 772,
              "end": 778,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 725,
            "end": 726,
            "value": 0,
            "raw": "0"
          }
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 792,
      "end": 888,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 798,
          "end": 810,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 804,
              "end": 809,
              "id": {
                "type": "Identifier",
                "start": 804,
                "end": 805,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 808,
                "end": 809,
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
          "type": "ExpressionStatement",
          "start": 815,
          "end": 821,
          "expression": {
            "type": "AssignmentExpression",
            "start": 815,
            "end": 820,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 815,
              "end": 816,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 819,
              "end": 820,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "directive": null
        },
        {
          "type": "BlockStatement",
          "start": 826,
          "end": 886,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 836,
              "end": 852,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 842,
                  "end": 851,
                  "id": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 843,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 846,
                    "end": 851,
                    "value": false,
                    "raw": "false"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 861,
              "end": 880,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 865,
                  "end": 879,
                  "id": {
                    "type": "Identifier",
                    "start": 865,
                    "end": 875,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 866,
                      "end": 875,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 868,
                        "end": 875
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 879,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 904,
      "end": 948,
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 914,
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
        "start": 917,
        "end": 948,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 923,
            "end": 935,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 929,
                "end": 934,
                "id": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 930,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 933,
                  "end": 934,
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
            "type": "ExpressionStatement",
            "start": 940,
            "end": 946,
            "expression": {
              "type": "AssignmentExpression",
              "start": 940,
              "end": 945,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 940,
                "end": 941,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 944,
                "end": 945,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "type": "VariableDeclaration",
      "start": 950,
      "end": 997,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 954,
          "end": 996,
          "id": {
            "type": "Identifier",
            "start": 954,
            "end": 956,
            "name": "F2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 959,
            "end": 996,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 965,
              "end": 996,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 971,
                  "end": 983,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 977,
                      "end": 982,
                      "id": {
                        "type": "Identifier",
                        "start": 977,
                        "end": 978,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 981,
                        "end": 982,
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
                  "type": "ExpressionStatement",
                  "start": 988,
                  "end": 994,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 988,
                    "end": 993,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 988,
                      "end": 989,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 992,
                      "end": 993,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
      "start": 999,
      "end": 1052,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1003,
          "end": 1051,
          "id": {
            "type": "Identifier",
            "start": 1003,
            "end": 1005,
            "name": "F3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1008,
            "end": 1051,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1020,
              "end": 1051,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1026,
                  "end": 1038,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1032,
                      "end": 1037,
                      "id": {
                        "type": "Identifier",
                        "start": 1032,
                        "end": 1033,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1036,
                        "end": 1037,
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
                  "type": "ExpressionStatement",
                  "start": 1043,
                  "end": 1049,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1043,
                    "end": 1048,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1043,
                      "end": 1044,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1047,
                      "end": 1048,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
      "start": 1065,
      "end": 1170,
      "id": {
        "type": "Identifier",
        "start": 1072,
        "end": 1073,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1074,
        "end": 1170,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1080,
            "end": 1092,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1086,
                "end": 1091,
                "id": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1087,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1090,
                  "end": 1091,
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
            "type": "ExpressionStatement",
            "start": 1097,
            "end": 1103,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1097,
              "end": 1102,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1097,
                "end": 1098,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1101,
                "end": 1102,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 1109,
            "end": 1168,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 1118,
                "end": 1134,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1124,
                    "end": 1133,
                    "id": {
                      "type": "Identifier",
                      "start": 1124,
                      "end": 1125,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1128,
                      "end": 1133,
                      "value": false,
                      "raw": "false"
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              {
                "type": "VariableDeclaration",
                "start": 1142,
                "end": 1162,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1146,
                    "end": 1161,
                    "id": {
                      "type": "Identifier",
                      "start": 1146,
                      "end": 1157,
                      "name": "b2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1148,
                        "end": 1157,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1150,
                          "end": 1157
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 1160,
                      "end": 1161,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
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
      "start": 1183,
      "end": 1451,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1190,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1191,
        "end": 1451,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1197,
            "end": 1254,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1197,
              "end": 1208,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1208,
              "end": 1254,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1211,
                "end": 1254,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1221,
                    "end": 1233,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1227,
                        "end": 1232,
                        "id": {
                          "type": "Identifier",
                          "start": 1227,
                          "end": 1228,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1231,
                          "end": 1232,
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
                    "type": "ExpressionStatement",
                    "start": 1242,
                    "end": 1248,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1242,
                      "end": 1247,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1242,
                        "end": 1243,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1246,
                        "end": 1247,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
            "start": 1260,
            "end": 1312,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1260,
              "end": 1266,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1266,
              "end": 1312,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1269,
                "end": 1312,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1279,
                    "end": 1291,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1285,
                        "end": 1290,
                        "id": {
                          "type": "Identifier",
                          "start": 1285,
                          "end": 1286,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1289,
                          "end": 1290,
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
                    "type": "ExpressionStatement",
                    "start": 1300,
                    "end": 1306,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1300,
                      "end": 1305,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1300,
                        "end": 1301,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1304,
                        "end": 1305,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
            "start": 1318,
            "end": 1387,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1323,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1323,
              "end": 1387,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1326,
                "end": 1387,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1336,
                    "end": 1348,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1342,
                        "end": 1347,
                        "id": {
                          "type": "Identifier",
                          "start": 1342,
                          "end": 1343,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1346,
                          "end": 1347,
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
                    "type": "ExpressionStatement",
                    "start": 1357,
                    "end": 1363,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1357,
                      "end": 1362,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1357,
                        "end": 1358,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1361,
                        "end": 1362,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1372,
                    "end": 1381,
                    "argument": {
                      "type": "Identifier",
                      "start": 1379,
                      "end": 1380,
                      "name": "n",
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
            "start": 1393,
            "end": 1449,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1397,
              "end": 1398,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1398,
              "end": 1449,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1399,
                  "end": 1404,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1406,
                "end": 1449,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1416,
                    "end": 1428,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1422,
                        "end": 1427,
                        "id": {
                          "type": "Identifier",
                          "start": 1422,
                          "end": 1423,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1426,
                          "end": 1427,
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
                    "type": "ExpressionStatement",
                    "start": 1437,
                    "end": 1443,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1437,
                      "end": 1442,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1437,
                        "end": 1438,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1441,
                        "end": 1442,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
      "start": 1472,
      "end": 1594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1476,
          "end": 1594,
          "id": {
            "type": "Identifier",
            "start": 1476,
            "end": 1477,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1480,
            "end": 1594,
            "properties": [
              {
                "type": "Property",
                "start": 1486,
                "end": 1533,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1486,
                  "end": 1487,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1487,
                  "end": 1533,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1490,
                    "end": 1533,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1500,
                        "end": 1512,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1506,
                            "end": 1511,
                            "id": {
                              "type": "Identifier",
                              "start": 1506,
                              "end": 1507,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1510,
                              "end": 1511,
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
                        "type": "ExpressionStatement",
                        "start": 1521,
                        "end": 1527,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1521,
                          "end": 1526,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1521,
                            "end": 1522,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1525,
                            "end": 1526,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
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
                "start": 1539,
                "end": 1592,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1539,
                  "end": 1541,
                  "name": "f2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1543,
                  "end": 1592,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1549,
                    "end": 1592,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1559,
                        "end": 1571,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1565,
                            "end": 1570,
                            "id": {
                              "type": "Identifier",
                              "start": 1565,
                              "end": 1566,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1569,
                              "end": 1570,
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
                        "type": "ExpressionStatement",
                        "start": 1580,
                        "end": 1586,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1580,
                          "end": 1585,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1580,
                            "end": 1581,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1584,
                            "end": 1585,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
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
