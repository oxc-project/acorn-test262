__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 615,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict"
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 14,
      "end": 43,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 41,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 41,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForStatement",
      "start": 52,
      "end": 87,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 87,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 85,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 78,
              "end": 84,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 57,
        "end": 67,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 67,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 65,
              "end": 67,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 88,
        "end": 94,
        "arguments": [
          {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 88,
          "end": 91,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForStatement",
      "start": 97,
      "end": 134,
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 134,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 125,
            "end": 132,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 125,
              "end": 131,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 125,
                "end": 128,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 102,
        "end": 114,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 114,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 112,
              "end": 114,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 136,
      "end": 188,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 188,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 152,
            "end": 163,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 156,
                "end": 162,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 160,
                  "end": 162,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 168,
            "end": 175,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 168,
              "end": 174,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 168,
                "end": 171,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 186,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 180,
              "end": 185,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 184,
                "end": 185,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "init": null,
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 190,
      "end": 233,
      "body": {
        "type": "BlockStatement",
        "start": 200,
        "end": 233,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 206,
            "end": 219,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 212,
                "end": 218,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 216,
                  "end": 218,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 224,
            "end": 231,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 224,
              "end": 230,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 224,
                "end": 227,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "init": null,
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 235,
      "end": 276,
      "body": {
        "type": "BlockStatement",
        "start": 250,
        "end": 276,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 256,
            "end": 263,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 256,
              "end": 262,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 256,
                "end": 259,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 268,
            "end": 274,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 268,
              "end": 273,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 272,
                "end": 273,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 240,
        "end": 245,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 244,
            "end": 245,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 278,
      "end": 325,
      "body": {
        "type": "BlockStatement",
        "start": 288,
        "end": 325,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 294,
            "end": 300,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 299,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 305,
            "end": 312,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 305,
              "end": 311,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 305,
                "end": 308,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 317,
            "end": 323,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 317,
              "end": 322,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 321,
                "end": 322,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "init": null,
      "test": null,
      "update": null
    },
    {
      "type": "WhileStatement",
      "start": 327,
      "end": 366,
      "body": {
        "type": "BlockStatement",
        "start": 340,
        "end": 366,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 346,
            "end": 352,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 350,
                "end": 351,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 351,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 357,
            "end": 364,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 357,
              "end": 363,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 357,
                "end": 360,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 334,
        "end": 338,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "WhileStatement",
      "start": 368,
      "end": 416,
      "body": {
        "type": "BlockStatement",
        "start": 381,
        "end": 416,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 387,
            "end": 402,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 393,
                "end": 401,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 394,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 397,
                  "end": 401,
                  "raw": "true",
                  "value": true
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 407,
            "end": 414,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 407,
              "end": 413,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 407,
                "end": 410,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 375,
        "end": 379,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 418,
      "end": 461,
      "body": {
        "type": "BlockStatement",
        "start": 421,
        "end": 447,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 427,
            "end": 433,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 431,
                "end": 432,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 432,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 438,
            "end": 445,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 438,
              "end": 444,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 442,
                  "end": 443,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 438,
                "end": 441,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 455,
        "end": 459,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 463,
      "end": 506,
      "body": {
        "type": "BlockStatement",
        "start": 466,
        "end": 492,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 472,
            "end": 478,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 476,
                "end": 477,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 483,
            "end": 490,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 483,
              "end": 489,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 487,
                  "end": 488,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 483,
                "end": 486,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 500,
        "end": 504,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "ForInStatement",
      "start": 508,
      "end": 541,
      "body": {
        "type": "BlockStatement",
        "start": 526,
        "end": 541,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 532,
            "end": 539,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 532,
              "end": 538,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 536,
                  "end": 537,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 532,
                "end": 535,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 513,
        "end": 518,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 517,
            "end": 518,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 517,
              "end": 518,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 522,
        "end": 524,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 543,
      "end": 578,
      "body": {
        "type": "BlockStatement",
        "start": 563,
        "end": 578,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 569,
            "end": 576,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 569,
              "end": 575,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 573,
                  "end": 574,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 569,
                "end": 572,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 548,
        "end": 555,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 554,
            "end": 555,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 559,
        "end": 561,
        "elements": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 580,
      "end": 615,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 600,
        "end": 615,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 606,
            "end": 613,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 606,
              "end": 612,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 610,
                  "end": 611,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 606,
                "end": 609,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 585,
        "end": 592,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 591,
            "end": 592,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 591,
              "end": 592,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 596,
        "end": 598,
        "elements": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
