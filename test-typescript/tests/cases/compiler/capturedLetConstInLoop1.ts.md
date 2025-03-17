__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2241,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
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
          "start": 21,
          "end": 27,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 33,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 30,
          "end": 33
        }
      }
    },
    {
      "type": "ForInStatement",
      "start": 47,
      "end": 113,
      "left": {
        "type": "VariableDeclaration",
        "start": 52,
        "end": 57,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
        "type": "ObjectExpression",
        "start": 61,
        "end": 63,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 113,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 96,
            "expression": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 94,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 94,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 85,
                    "end": 93,
                    "argument": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 101,
            "end": 111,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 102,
              "end": 109,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 115,
      "end": 181,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 120,
        "end": 125,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 125,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
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
        "start": 129,
        "end": 131,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 181,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 164,
            "expression": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 162,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 162,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 161,
                    "argument": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 161,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 179,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 170,
              "end": 177,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 183,
      "end": 259,
      "init": {
        "type": "VariableDeclaration",
        "start": 188,
        "end": 197,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 192,
            "end": 197,
            "id": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 196,
              "end": 197,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 199,
        "end": 204,
        "left": {
          "type": "Identifier",
          "start": 199,
          "end": 200,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 203,
          "end": 204,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 206,
        "end": 209,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 211,
        "end": 259,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 217,
            "end": 242,
            "expression": {
              "type": "FunctionExpression",
              "start": 218,
              "end": 240,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 229,
                "end": 240,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 231,
                    "end": 239,
                    "argument": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 247,
            "end": 257,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 248,
              "end": 255,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 261,
      "end": 336,
      "test": {
        "type": "BinaryExpression",
        "start": 268,
        "end": 275,
        "left": {
          "type": "Literal",
          "start": 268,
          "end": 269,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 274,
          "end": 275,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 277,
        "end": 336,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 283,
            "end": 289,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 287,
                "end": 288,
                "id": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
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
            "start": 294,
            "end": 319,
            "expression": {
              "type": "FunctionExpression",
              "start": 295,
              "end": 317,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 306,
                "end": 317,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 308,
                    "end": 316,
                    "argument": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 324,
            "end": 334,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 325,
              "end": 332,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 338,
      "end": 416,
      "body": {
        "type": "BlockStatement",
        "start": 341,
        "end": 400,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 353,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 352,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
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
            "start": 358,
            "end": 383,
            "expression": {
              "type": "FunctionExpression",
              "start": 359,
              "end": 381,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 370,
                "end": 381,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 372,
                    "end": 380,
                    "argument": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 380,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 388,
            "end": 398,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 389,
              "end": 396,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 395,
                "end": 396,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 408,
        "end": 415,
        "left": {
          "type": "Literal",
          "start": 408,
          "end": 409,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 414,
          "end": 415,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 418,
      "end": 509,
      "init": {
        "type": "VariableDeclaration",
        "start": 423,
        "end": 432,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 427,
            "end": 432,
            "id": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 431,
              "end": 432,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 434,
        "end": 439,
        "left": {
          "type": "Identifier",
          "start": 434,
          "end": 435,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 438,
          "end": 439,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 441,
        "end": 444,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 443,
          "end": 444,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 446,
        "end": 509,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 452,
            "end": 462,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 456,
                "end": 461,
                "id": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 457,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 460,
                  "end": 461,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 467,
            "end": 492,
            "expression": {
              "type": "FunctionExpression",
              "start": 468,
              "end": 490,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 479,
                "end": 490,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 481,
                    "end": 489,
                    "argument": {
                      "type": "Identifier",
                      "start": 488,
                      "end": 489,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 497,
            "end": 507,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 498,
              "end": 505,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 504,
                "end": 505,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 511,
      "end": 602,
      "init": {
        "type": "VariableDeclaration",
        "start": 516,
        "end": 532,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 520,
            "end": 525,
            "id": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
              "name": "x",
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
          },
          {
            "type": "VariableDeclarator",
            "start": 527,
            "end": 532,
            "id": {
              "type": "Identifier",
              "start": 527,
              "end": 528,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 531,
              "end": 532,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 534,
        "end": 539,
        "left": {
          "type": "Identifier",
          "start": 534,
          "end": 535,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 538,
          "end": 539,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 541,
        "end": 544,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 543,
          "end": 544,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 546,
        "end": 602,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 552,
            "end": 581,
            "expression": {
              "type": "FunctionExpression",
              "start": 553,
              "end": 579,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 564,
                "end": 579,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 566,
                    "end": 578,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 573,
                      "end": 578,
                      "left": {
                        "type": "Identifier",
                        "start": 573,
                        "end": 574,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 578,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 586,
            "end": 600,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 587,
              "end": 598,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 593,
                "end": 598,
                "left": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 594,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 604,
      "end": 690,
      "test": {
        "type": "BinaryExpression",
        "start": 611,
        "end": 618,
        "left": {
          "type": "Literal",
          "start": 611,
          "end": 612,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 617,
          "end": 618,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 620,
        "end": 690,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 626,
            "end": 635,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 630,
                "end": 631,
                "id": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 633,
                "end": 634,
                "id": {
                  "type": "Identifier",
                  "start": 633,
                  "end": 634,
                  "name": "y",
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
            "start": 640,
            "end": 669,
            "expression": {
              "type": "FunctionExpression",
              "start": 641,
              "end": 667,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 652,
                "end": 667,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 654,
                    "end": 666,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 661,
                      "end": 666,
                      "left": {
                        "type": "Identifier",
                        "start": 661,
                        "end": 662,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 666,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 674,
            "end": 688,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 675,
              "end": 686,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 681,
                "end": 686,
                "left": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 682,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 692,
      "end": 781,
      "body": {
        "type": "BlockStatement",
        "start": 695,
        "end": 765,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 701,
            "end": 710,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 705,
                "end": 706,
                "id": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 708,
                "end": 709,
                "id": {
                  "type": "Identifier",
                  "start": 708,
                  "end": 709,
                  "name": "y",
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
            "start": 715,
            "end": 744,
            "expression": {
              "type": "FunctionExpression",
              "start": 716,
              "end": 742,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 727,
                "end": 742,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 729,
                    "end": 741,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 736,
                      "end": 741,
                      "left": {
                        "type": "Identifier",
                        "start": 736,
                        "end": 737,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 740,
                        "end": 741,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 749,
            "end": 763,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 750,
              "end": 761,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 756,
                "end": 761,
                "left": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 757,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 761,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 773,
        "end": 780,
        "left": {
          "type": "Literal",
          "start": 773,
          "end": 774,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 779,
          "end": 780,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 783,
      "end": 882,
      "init": {
        "type": "VariableDeclaration",
        "start": 788,
        "end": 797,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 792,
            "end": 797,
            "id": {
              "type": "Identifier",
              "start": 792,
              "end": 793,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 796,
              "end": 797,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 799,
        "end": 804,
        "left": {
          "type": "Identifier",
          "start": 799,
          "end": 800,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 803,
          "end": 804,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 806,
        "end": 809,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 808,
          "end": 809,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 811,
        "end": 882,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 817,
            "end": 827,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 821,
                "end": 826,
                "id": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 822,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 825,
                  "end": 826,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 832,
            "end": 861,
            "expression": {
              "type": "FunctionExpression",
              "start": 833,
              "end": 859,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 844,
                "end": 859,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 846,
                    "end": 858,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 853,
                      "end": 858,
                      "left": {
                        "type": "Identifier",
                        "start": 853,
                        "end": 854,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 858,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 866,
            "end": 880,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 867,
              "end": 878,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 873,
                "end": 878,
                "left": {
                  "type": "Identifier",
                  "start": 873,
                  "end": 874,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 878,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 884,
      "end": 931,
      "init": {
        "type": "VariableDeclaration",
        "start": 889,
        "end": 914,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 893,
            "end": 914,
            "id": {
              "type": "Identifier",
              "start": 893,
              "end": 894,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "SequenceExpression",
              "start": 898,
              "end": 913,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 898,
                  "end": 910,
                  "callee": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 901,
                    "name": "use",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 902,
                      "end": 909,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 908,
                        "end": 909,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "Literal",
                  "start": 912,
                  "end": 913,
                  "value": 0,
                  "raw": "0"
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 916,
        "end": 921,
        "left": {
          "type": "Identifier",
          "start": 916,
          "end": 917,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 920,
          "end": 921,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 923,
        "end": 926,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 925,
          "end": 926,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 928,
        "end": 931,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 933,
      "end": 978,
      "init": {
        "type": "VariableDeclaration",
        "start": 938,
        "end": 947,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 942,
            "end": 947,
            "id": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 946,
              "end": 947,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "SequenceExpression",
        "start": 949,
        "end": 968,
        "expressions": [
          {
            "type": "CallExpression",
            "start": 949,
            "end": 961,
            "callee": {
              "type": "Identifier",
              "start": 949,
              "end": 952,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 953,
                "end": 960,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 959,
                  "end": 960,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "BinaryExpression",
            "start": 963,
            "end": 968,
            "left": {
              "type": "Identifier",
              "start": 963,
              "end": 964,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "start": 967,
              "end": 968,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "update": {
        "type": "UpdateExpression",
        "start": 970,
        "end": 973,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 972,
          "end": 973,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 975,
        "end": 978,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 980,
      "end": 1025,
      "init": {
        "type": "VariableDeclaration",
        "start": 985,
        "end": 994,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 989,
            "end": 994,
            "id": {
              "type": "Identifier",
              "start": 989,
              "end": 990,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 993,
              "end": 994,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 996,
        "end": 1001,
        "left": {
          "type": "Identifier",
          "start": 996,
          "end": 997,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1000,
          "end": 1001,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "SequenceExpression",
        "start": 1003,
        "end": 1020,
        "expressions": [
          {
            "type": "CallExpression",
            "start": 1003,
            "end": 1015,
            "callee": {
              "type": "Identifier",
              "start": 1003,
              "end": 1006,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1007,
                "end": 1014,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1014,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "UpdateExpression",
            "start": 1017,
            "end": 1020,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 1019,
              "end": 1020,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1022,
        "end": 1025,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 1027,
      "end": 1120,
      "init": {
        "type": "VariableDeclaration",
        "start": 1032,
        "end": 1057,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1036,
            "end": 1057,
            "id": {
              "type": "Identifier",
              "start": 1036,
              "end": 1037,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "SequenceExpression",
              "start": 1041,
              "end": 1056,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 1041,
                  "end": 1053,
                  "callee": {
                    "type": "Identifier",
                    "start": 1041,
                    "end": 1044,
                    "name": "use",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1045,
                      "end": 1052,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 1051,
                        "end": 1052,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "Literal",
                  "start": 1055,
                  "end": 1056,
                  "value": 0,
                  "raw": "0"
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "SequenceExpression",
        "start": 1059,
        "end": 1078,
        "expressions": [
          {
            "type": "CallExpression",
            "start": 1059,
            "end": 1071,
            "callee": {
              "type": "Identifier",
              "start": 1059,
              "end": 1062,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1063,
                "end": 1070,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1070,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "BinaryExpression",
            "start": 1073,
            "end": 1078,
            "left": {
              "type": "Identifier",
              "start": 1073,
              "end": 1074,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "start": 1077,
              "end": 1078,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "update": {
        "type": "SequenceExpression",
        "start": 1080,
        "end": 1097,
        "expressions": [
          {
            "type": "CallExpression",
            "start": 1080,
            "end": 1092,
            "callee": {
              "type": "Identifier",
              "start": 1080,
              "end": 1083,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1084,
                "end": 1091,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 1090,
                  "end": 1091,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "UpdateExpression",
            "start": 1094,
            "end": 1097,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 1096,
              "end": 1097,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1099,
        "end": 1120,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1105,
            "end": 1118,
            "expression": {
              "type": "CallExpression",
              "start": 1105,
              "end": 1117,
              "callee": {
                "type": "Identifier",
                "start": 1105,
                "end": 1108,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1109,
                  "end": 1116,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 1115,
                    "end": 1116,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "start": 1139,
      "end": 1207,
      "left": {
        "type": "VariableDeclaration",
        "start": 1144,
        "end": 1151,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1150,
            "end": 1151,
            "id": {
              "type": "Identifier",
              "start": 1150,
              "end": 1151,
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
        "type": "ObjectExpression",
        "start": 1155,
        "end": 1157,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 1159,
        "end": 1207,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1165,
            "end": 1190,
            "expression": {
              "type": "FunctionExpression",
              "start": 1166,
              "end": 1188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1177,
                "end": 1188,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1179,
                    "end": 1187,
                    "argument": {
                      "type": "Identifier",
                      "start": 1186,
                      "end": 1187,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1195,
            "end": 1205,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1196,
              "end": 1203,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1202,
                "end": 1203,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1209,
      "end": 1277,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1214,
        "end": 1221,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1220,
            "end": 1221,
            "id": {
              "type": "Identifier",
              "start": 1220,
              "end": 1221,
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
        "start": 1225,
        "end": 1227,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 1229,
        "end": 1277,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1235,
            "end": 1260,
            "expression": {
              "type": "FunctionExpression",
              "start": 1236,
              "end": 1258,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1247,
                "end": 1258,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1249,
                    "end": 1257,
                    "argument": {
                      "type": "Identifier",
                      "start": 1256,
                      "end": 1257,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1265,
            "end": 1275,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1266,
              "end": 1273,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1279,
      "end": 1353,
      "init": {
        "type": "VariableDeclaration",
        "start": 1284,
        "end": 1295,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1290,
            "end": 1295,
            "id": {
              "type": "Identifier",
              "start": 1290,
              "end": 1291,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1294,
              "end": 1295,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1297,
        "end": 1302,
        "left": {
          "type": "Identifier",
          "start": 1297,
          "end": 1298,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1301,
          "end": 1302,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1305,
        "end": 1353,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1311,
            "end": 1336,
            "expression": {
              "type": "FunctionExpression",
              "start": 1312,
              "end": 1334,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1323,
                "end": 1334,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1325,
                    "end": 1333,
                    "argument": {
                      "type": "Identifier",
                      "start": 1332,
                      "end": 1333,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1341,
            "end": 1351,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1342,
              "end": 1349,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1348,
                "end": 1349,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 1355,
      "end": 1436,
      "test": {
        "type": "BinaryExpression",
        "start": 1362,
        "end": 1369,
        "left": {
          "type": "Literal",
          "start": 1362,
          "end": 1363,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1368,
          "end": 1369,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1371,
        "end": 1436,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1377,
            "end": 1389,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1383,
                "end": 1388,
                "id": {
                  "type": "Identifier",
                  "start": 1383,
                  "end": 1384,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1387,
                  "end": 1388,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1394,
            "end": 1419,
            "expression": {
              "type": "FunctionExpression",
              "start": 1395,
              "end": 1417,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1406,
                "end": 1417,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1408,
                    "end": 1416,
                    "argument": {
                      "type": "Identifier",
                      "start": 1415,
                      "end": 1416,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1424,
            "end": 1434,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1425,
              "end": 1432,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1431,
                "end": 1432,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1438,
      "end": 1522,
      "body": {
        "type": "BlockStatement",
        "start": 1441,
        "end": 1506,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1447,
            "end": 1459,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1453,
                "end": 1458,
                "id": {
                  "type": "Identifier",
                  "start": 1453,
                  "end": 1454,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1457,
                  "end": 1458,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1464,
            "end": 1489,
            "expression": {
              "type": "FunctionExpression",
              "start": 1465,
              "end": 1487,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1476,
                "end": 1487,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1478,
                    "end": 1486,
                    "argument": {
                      "type": "Identifier",
                      "start": 1485,
                      "end": 1486,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1494,
            "end": 1504,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1495,
              "end": 1502,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1501,
                "end": 1502,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1514,
        "end": 1521,
        "left": {
          "type": "Literal",
          "start": 1514,
          "end": 1515,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1520,
          "end": 1521,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 1524,
      "end": 1615,
      "init": {
        "type": "VariableDeclaration",
        "start": 1529,
        "end": 1540,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1535,
            "end": 1540,
            "id": {
              "type": "Identifier",
              "start": 1535,
              "end": 1536,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1539,
              "end": 1540,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1542,
        "end": 1547,
        "left": {
          "type": "Identifier",
          "start": 1542,
          "end": 1543,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1546,
          "end": 1547,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1550,
        "end": 1615,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1556,
            "end": 1568,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1562,
                "end": 1567,
                "id": {
                  "type": "Identifier",
                  "start": 1562,
                  "end": 1563,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1566,
                  "end": 1567,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1573,
            "end": 1598,
            "expression": {
              "type": "FunctionExpression",
              "start": 1574,
              "end": 1596,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1585,
                "end": 1596,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1587,
                    "end": 1595,
                    "argument": {
                      "type": "Identifier",
                      "start": 1594,
                      "end": 1595,
                      "name": "x",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1603,
            "end": 1613,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1604,
              "end": 1611,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1610,
                "end": 1611,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1617,
      "end": 1706,
      "init": {
        "type": "VariableDeclaration",
        "start": 1622,
        "end": 1640,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1628,
            "end": 1633,
            "id": {
              "type": "Identifier",
              "start": 1628,
              "end": 1629,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1632,
              "end": 1633,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1635,
            "end": 1640,
            "id": {
              "type": "Identifier",
              "start": 1635,
              "end": 1636,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1639,
              "end": 1640,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1642,
        "end": 1647,
        "left": {
          "type": "Identifier",
          "start": 1642,
          "end": 1643,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1646,
          "end": 1647,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1650,
        "end": 1706,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1656,
            "end": 1685,
            "expression": {
              "type": "FunctionExpression",
              "start": 1657,
              "end": 1683,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1668,
                "end": 1683,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1670,
                    "end": 1682,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1677,
                      "end": 1682,
                      "left": {
                        "type": "Identifier",
                        "start": 1677,
                        "end": 1678,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1681,
                        "end": 1682,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1690,
            "end": 1704,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1691,
              "end": 1702,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1697,
                "end": 1702,
                "left": {
                  "type": "Identifier",
                  "start": 1697,
                  "end": 1698,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1701,
                  "end": 1702,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 1708,
      "end": 1804,
      "test": {
        "type": "BinaryExpression",
        "start": 1715,
        "end": 1722,
        "left": {
          "type": "Literal",
          "start": 1715,
          "end": 1716,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1721,
          "end": 1722,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1724,
        "end": 1804,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1730,
            "end": 1749,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1736,
                "end": 1741,
                "id": {
                  "type": "Identifier",
                  "start": 1736,
                  "end": 1737,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1740,
                  "end": 1741,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1743,
                "end": 1748,
                "id": {
                  "type": "Identifier",
                  "start": 1743,
                  "end": 1744,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1747,
                  "end": 1748,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1754,
            "end": 1783,
            "expression": {
              "type": "FunctionExpression",
              "start": 1755,
              "end": 1781,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1766,
                "end": 1781,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1768,
                    "end": 1780,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1775,
                      "end": 1780,
                      "left": {
                        "type": "Identifier",
                        "start": 1775,
                        "end": 1776,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1779,
                        "end": 1780,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1788,
            "end": 1802,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1789,
              "end": 1800,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1795,
                "end": 1800,
                "left": {
                  "type": "Identifier",
                  "start": 1795,
                  "end": 1796,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1799,
                  "end": 1800,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1806,
      "end": 1905,
      "body": {
        "type": "BlockStatement",
        "start": 1809,
        "end": 1889,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1815,
            "end": 1834,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1821,
                "end": 1826,
                "id": {
                  "type": "Identifier",
                  "start": 1821,
                  "end": 1822,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1825,
                  "end": 1826,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1828,
                "end": 1833,
                "id": {
                  "type": "Identifier",
                  "start": 1828,
                  "end": 1829,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1832,
                  "end": 1833,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1839,
            "end": 1868,
            "expression": {
              "type": "FunctionExpression",
              "start": 1840,
              "end": 1866,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1851,
                "end": 1866,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1853,
                    "end": 1865,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1860,
                      "end": 1865,
                      "left": {
                        "type": "Identifier",
                        "start": 1860,
                        "end": 1861,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1864,
                        "end": 1865,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1873,
            "end": 1887,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1874,
              "end": 1885,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1880,
                "end": 1885,
                "left": {
                  "type": "Identifier",
                  "start": 1880,
                  "end": 1881,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1884,
                  "end": 1885,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1897,
        "end": 1904,
        "left": {
          "type": "Literal",
          "start": 1897,
          "end": 1898,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1903,
          "end": 1904,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 1907,
      "end": 2006,
      "init": {
        "type": "VariableDeclaration",
        "start": 1912,
        "end": 1923,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1918,
            "end": 1923,
            "id": {
              "type": "Identifier",
              "start": 1918,
              "end": 1919,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1922,
              "end": 1923,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1925,
        "end": 1930,
        "left": {
          "type": "Identifier",
          "start": 1925,
          "end": 1926,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1929,
          "end": 1930,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1933,
        "end": 2006,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1939,
            "end": 1951,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1945,
                "end": 1950,
                "id": {
                  "type": "Identifier",
                  "start": 1945,
                  "end": 1946,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1949,
                  "end": 1950,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1956,
            "end": 1985,
            "expression": {
              "type": "FunctionExpression",
              "start": 1957,
              "end": 1983,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1968,
                "end": 1983,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1970,
                    "end": 1982,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1977,
                      "end": 1982,
                      "left": {
                        "type": "Identifier",
                        "start": 1977,
                        "end": 1978,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1981,
                        "end": 1982,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1990,
            "end": 2004,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1991,
              "end": 2002,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1997,
                "end": 2002,
                "left": {
                  "type": "Identifier",
                  "start": 1997,
                  "end": 1998,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 2001,
                  "end": 2002,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2064,
      "end": 2105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2078,
          "end": 2104,
          "id": {
            "type": "Identifier",
            "start": 2078,
            "end": 2104,
            "name": "sobj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2082,
              "end": 2104,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2084,
                "end": 2104,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 2086,
                    "end": 2102,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 2087,
                        "end": 2096,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2088,
                          "end": 2096,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2090,
                            "end": 2096
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2097,
                      "end": 2102,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2099,
                        "end": 2102
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ForInStatement",
      "start": 2106,
      "end": 2152,
      "left": {
        "type": "VariableDeclaration",
        "start": 2111,
        "end": 2117,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2115,
            "end": 2117,
            "id": {
              "type": "Identifier",
              "start": 2115,
              "end": 2117,
              "name": "sx",
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
        "type": "Identifier",
        "start": 2121,
        "end": 2125,
        "name": "sobj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2127,
        "end": 2152,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2133,
            "end": 2150,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2134,
              "end": 2148,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "MemberExpression",
                "start": 2140,
                "end": 2148,
                "object": {
                  "type": "Identifier",
                  "start": 2140,
                  "end": 2144,
                  "name": "sobj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2145,
                  "end": 2147,
                  "name": "sx",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2153,
      "end": 2194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2167,
          "end": 2193,
          "id": {
            "type": "Identifier",
            "start": 2167,
            "end": 2193,
            "name": "iobj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2171,
              "end": 2193,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2173,
                "end": 2193,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 2175,
                    "end": 2191,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 2176,
                        "end": 2185,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2177,
                          "end": 2185,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2179,
                            "end": 2185
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2186,
                      "end": 2191,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2188,
                        "end": 2191
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ForInStatement",
      "start": 2195,
      "end": 2241,
      "left": {
        "type": "VariableDeclaration",
        "start": 2200,
        "end": 2206,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2204,
            "end": 2206,
            "id": {
              "type": "Identifier",
              "start": 2204,
              "end": 2206,
              "name": "ix",
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
        "type": "Identifier",
        "start": 2210,
        "end": 2214,
        "name": "iobj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2216,
        "end": 2241,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2222,
            "end": 2239,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2223,
              "end": 2237,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "MemberExpression",
                "start": 2229,
                "end": 2237,
                "object": {
                  "type": "Identifier",
                  "start": 2229,
                  "end": 2233,
                  "name": "iobj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2234,
                  "end": 2236,
                  "name": "ix",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
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
