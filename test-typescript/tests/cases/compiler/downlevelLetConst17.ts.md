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
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
    },
    {
      "type": "TSDeclareFunction",
      "start": 14,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "name": "use",
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
          "start": 35,
          "end": 41,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 41,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "name": "x",
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
      "type": "ForStatement",
      "start": 52,
      "end": 87,
      "init": {
        "type": "VariableDeclaration",
        "start": 57,
        "end": 67,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 67,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 65,
              "end": 67,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 87,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 85,
            "expression": {
              "type": "CallExpression",
              "start": 78,
              "end": 84,
              "callee": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 95,
      "expression": {
        "type": "CallExpression",
        "start": 88,
        "end": 94,
        "callee": {
          "type": "Identifier",
          "start": 88,
          "end": 91,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ForStatement",
      "start": 97,
      "end": 134,
      "init": {
        "type": "VariableDeclaration",
        "start": 102,
        "end": 114,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 114,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 112,
              "end": 114,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 134,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 125,
            "end": 132,
            "expression": {
              "type": "CallExpression",
              "start": 125,
              "end": 131,
              "callee": {
                "type": "Identifier",
                "start": 125,
                "end": 128,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 136,
      "end": 188,
      "init": null,
      "test": null,
      "update": null,
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
                "id": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 160,
                  "end": 162,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 168,
            "end": 175,
            "expression": {
              "type": "CallExpression",
              "start": 168,
              "end": 174,
              "callee": {
                "type": "Identifier",
                "start": 168,
                "end": 171,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 186,
            "expression": {
              "type": "AssignmentExpression",
              "start": 180,
              "end": 185,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 184,
                "end": 185,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 190,
      "end": 233,
      "init": null,
      "test": null,
      "update": null,
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
                "id": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 216,
                  "end": 218,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 224,
            "end": 231,
            "expression": {
              "type": "CallExpression",
              "start": 224,
              "end": 230,
              "callee": {
                "type": "Identifier",
                "start": 224,
                "end": 227,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 235,
      "end": 276,
      "init": {
        "type": "VariableDeclaration",
        "start": 240,
        "end": 245,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 244,
            "end": 245,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "name": "x",
              "typeAnnotation": null,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 250,
        "end": 276,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 256,
            "end": 263,
            "expression": {
              "type": "CallExpression",
              "start": 256,
              "end": 262,
              "callee": {
                "type": "Identifier",
                "start": 256,
                "end": 259,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 268,
            "end": 274,
            "expression": {
              "type": "AssignmentExpression",
              "start": 268,
              "end": 273,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 272,
                "end": 273,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 278,
      "end": 325,
      "init": null,
      "test": null,
      "update": null,
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
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "name": "x",
                  "typeAnnotation": null,
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
            "start": 305,
            "end": 312,
            "expression": {
              "type": "CallExpression",
              "start": 305,
              "end": 311,
              "callee": {
                "type": "Identifier",
                "start": 305,
                "end": 308,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 317,
            "end": 323,
            "expression": {
              "type": "AssignmentExpression",
              "start": 317,
              "end": 322,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 321,
                "end": 322,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 327,
      "end": 366,
      "test": {
        "type": "Literal",
        "start": 334,
        "end": 338,
        "value": true,
        "raw": "true"
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 351,
                  "name": "x",
                  "typeAnnotation": null,
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
            "start": 357,
            "end": 364,
            "expression": {
              "type": "CallExpression",
              "start": 357,
              "end": 363,
              "callee": {
                "type": "Identifier",
                "start": 357,
                "end": 360,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 368,
      "end": 416,
      "test": {
        "type": "Literal",
        "start": 375,
        "end": 379,
        "value": true,
        "raw": "true"
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 394,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 397,
                  "end": 401,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 407,
            "end": 414,
            "expression": {
              "type": "CallExpression",
              "start": 407,
              "end": 413,
              "callee": {
                "type": "Identifier",
                "start": 407,
                "end": 410,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
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
                "id": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 432,
                  "name": "x",
                  "typeAnnotation": null,
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
            "start": 438,
            "end": 445,
            "expression": {
              "type": "CallExpression",
              "start": 438,
              "end": 444,
              "callee": {
                "type": "Identifier",
                "start": 438,
                "end": 441,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 442,
                  "end": 443,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 455,
        "end": 459,
        "value": true,
        "raw": "true"
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
                "id": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "name": "x",
                  "typeAnnotation": null,
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
            "start": 483,
            "end": 490,
            "expression": {
              "type": "CallExpression",
              "start": 483,
              "end": 489,
              "callee": {
                "type": "Identifier",
                "start": 483,
                "end": 486,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 487,
                  "end": 488,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 500,
        "end": 504,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "ForInStatement",
      "start": 508,
      "end": 541,
      "left": {
        "type": "VariableDeclaration",
        "start": 513,
        "end": 518,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 517,
            "end": 518,
            "id": {
              "type": "Identifier",
              "start": 517,
              "end": 518,
              "name": "x",
              "typeAnnotation": null,
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
      "right": {
        "type": "ArrayExpression",
        "start": 522,
        "end": 524,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 526,
        "end": 541,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 532,
            "end": 539,
            "expression": {
              "type": "CallExpression",
              "start": 532,
              "end": 538,
              "callee": {
                "type": "Identifier",
                "start": 532,
                "end": 535,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 536,
                  "end": 537,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 543,
      "end": 578,
      "left": {
        "type": "VariableDeclaration",
        "start": 548,
        "end": 555,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 554,
            "end": 555,
            "id": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 559,
        "end": 561,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 563,
        "end": 578,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 569,
            "end": 576,
            "expression": {
              "type": "CallExpression",
              "start": 569,
              "end": 575,
              "callee": {
                "type": "Identifier",
                "start": 569,
                "end": 572,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 573,
                  "end": 574,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 580,
      "end": 615,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 585,
        "end": 592,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 591,
            "end": 592,
            "id": {
              "type": "Identifier",
              "start": 591,
              "end": 592,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 596,
        "end": 598,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 600,
        "end": 615,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 606,
            "end": 613,
            "expression": {
              "type": "CallExpression",
              "start": 606,
              "end": 612,
              "callee": {
                "type": "Identifier",
                "start": 606,
                "end": 609,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 610,
                  "end": 611,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
