__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 1732,
  "body": [
    {
      "type": "ForInStatement",
      "start": 11,
      "end": 77,
      "left": {
        "type": "VariableDeclaration",
        "start": 16,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 20,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
        "start": 25,
        "end": 27,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 77,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 35,
            "end": 60,
            "expression": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 58,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 58,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 57,
                    "argument": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
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
            "start": 65,
            "end": 75,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 66,
              "end": 73,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
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
      "start": 79,
      "end": 145,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 88,
            "end": 89,
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
        "start": 93,
        "end": 95,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 145,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 128,
            "expression": {
              "type": "FunctionExpression",
              "start": 104,
              "end": 126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 117,
                    "end": 125,
                    "argument": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
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
            "start": 133,
            "end": 143,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 134,
              "end": 141,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
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
      "start": 147,
      "end": 223,
      "init": {
        "type": "VariableDeclaration",
        "start": 152,
        "end": 161,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 156,
            "end": 161,
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
              "end": 161,
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
        "start": 163,
        "end": 168,
        "left": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 167,
          "end": 168,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 170,
        "end": 173,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 223,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 181,
            "end": 206,
            "expression": {
              "type": "FunctionExpression",
              "start": 182,
              "end": 204,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 204,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 195,
                    "end": 203,
                    "argument": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 203,
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
            "start": 211,
            "end": 221,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 212,
              "end": 219,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
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
      "start": 225,
      "end": 300,
      "test": {
        "type": "BinaryExpression",
        "start": 232,
        "end": 239,
        "left": {
          "type": "Literal",
          "start": 232,
          "end": 233,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 238,
          "end": 239,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 300,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 247,
            "end": 253,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 252,
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
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
            "start": 258,
            "end": 283,
            "expression": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 281,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 281,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 272,
                    "end": 280,
                    "argument": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 280,
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
            "start": 288,
            "end": 298,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 289,
              "end": 296,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
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
      "start": 302,
      "end": 380,
      "body": {
        "type": "BlockStatement",
        "start": 305,
        "end": 364,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 311,
            "end": 317,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 315,
                "end": 316,
                "id": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
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
            "start": 322,
            "end": 347,
            "expression": {
              "type": "FunctionExpression",
              "start": 323,
              "end": 345,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 334,
                "end": 345,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 336,
                    "end": 344,
                    "argument": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 344,
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
            "start": 352,
            "end": 362,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 353,
              "end": 360,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
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
        "start": 372,
        "end": 379,
        "left": {
          "type": "Literal",
          "start": 372,
          "end": 373,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 378,
          "end": 379,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 382,
      "end": 473,
      "init": {
        "type": "VariableDeclaration",
        "start": 387,
        "end": 396,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 391,
            "end": 396,
            "id": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 395,
              "end": 396,
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
        "start": 398,
        "end": 403,
        "left": {
          "type": "Identifier",
          "start": 398,
          "end": 399,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 402,
          "end": 403,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 405,
        "end": 408,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 407,
          "end": 408,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 410,
        "end": 473,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 416,
            "end": 426,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 420,
                "end": 425,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 421,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 424,
                  "end": 425,
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
            "start": 431,
            "end": 456,
            "expression": {
              "type": "FunctionExpression",
              "start": 432,
              "end": 454,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 443,
                "end": 454,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 445,
                    "end": 453,
                    "argument": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 453,
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
            "start": 461,
            "end": 471,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 462,
              "end": 469,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
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
      "start": 475,
      "end": 566,
      "init": {
        "type": "VariableDeclaration",
        "start": 480,
        "end": 496,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 484,
            "end": 489,
            "id": {
              "type": "Identifier",
              "start": 484,
              "end": 485,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 488,
              "end": 489,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 491,
            "end": 496,
            "id": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 495,
              "end": 496,
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
        "start": 498,
        "end": 503,
        "left": {
          "type": "Identifier",
          "start": 498,
          "end": 499,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 502,
          "end": 503,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 505,
        "end": 508,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 507,
          "end": 508,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 510,
        "end": 566,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 516,
            "end": 545,
            "expression": {
              "type": "FunctionExpression",
              "start": 517,
              "end": 543,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 528,
                "end": 543,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 530,
                    "end": 542,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 537,
                      "end": 542,
                      "left": {
                        "type": "Identifier",
                        "start": 537,
                        "end": 538,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 542,
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
            "start": 550,
            "end": 564,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 551,
              "end": 562,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 557,
                "end": 562,
                "left": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 562,
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
      "start": 568,
      "end": 654,
      "test": {
        "type": "BinaryExpression",
        "start": 575,
        "end": 582,
        "left": {
          "type": "Literal",
          "start": 575,
          "end": 576,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 581,
          "end": 582,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 584,
        "end": 654,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 590,
            "end": 599,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 594,
                "end": 595,
                "id": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 595,
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
                "start": 597,
                "end": 598,
                "id": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
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
            "start": 604,
            "end": 633,
            "expression": {
              "type": "FunctionExpression",
              "start": 605,
              "end": 631,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 616,
                "end": 631,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 618,
                    "end": 630,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 625,
                      "end": 630,
                      "left": {
                        "type": "Identifier",
                        "start": 625,
                        "end": 626,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 629,
                        "end": 630,
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
            "start": 638,
            "end": 652,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 639,
              "end": 650,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 645,
                "end": 650,
                "left": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 646,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 650,
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
      "start": 656,
      "end": 745,
      "body": {
        "type": "BlockStatement",
        "start": 659,
        "end": 729,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 665,
            "end": 674,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 669,
                "end": 670,
                "id": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
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
                "start": 672,
                "end": 673,
                "id": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
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
            "start": 679,
            "end": 708,
            "expression": {
              "type": "FunctionExpression",
              "start": 680,
              "end": 706,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 691,
                "end": 706,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 693,
                    "end": 705,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 700,
                      "end": 705,
                      "left": {
                        "type": "Identifier",
                        "start": 700,
                        "end": 701,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 705,
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
            "start": 713,
            "end": 727,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 714,
              "end": 725,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 720,
                "end": 725,
                "left": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 721,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 724,
                  "end": 725,
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
        "start": 737,
        "end": 744,
        "left": {
          "type": "Literal",
          "start": 737,
          "end": 738,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 743,
          "end": 744,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 747,
      "end": 846,
      "init": {
        "type": "VariableDeclaration",
        "start": 752,
        "end": 761,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 756,
            "end": 761,
            "id": {
              "type": "Identifier",
              "start": 756,
              "end": 757,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 760,
              "end": 761,
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
        "start": 763,
        "end": 768,
        "left": {
          "type": "Identifier",
          "start": 763,
          "end": 764,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 767,
          "end": 768,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 770,
        "end": 773,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 772,
          "end": 773,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 775,
        "end": 846,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 781,
            "end": 791,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 785,
                "end": 790,
                "id": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 786,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 789,
                  "end": 790,
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
            "start": 796,
            "end": 825,
            "expression": {
              "type": "FunctionExpression",
              "start": 797,
              "end": 823,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 808,
                "end": 823,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 810,
                    "end": 822,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 817,
                      "end": 822,
                      "left": {
                        "type": "Identifier",
                        "start": 817,
                        "end": 818,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 821,
                        "end": 822,
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
            "start": 830,
            "end": 844,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 831,
              "end": 842,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 837,
                "end": 842,
                "left": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 838,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 842,
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
      "type": "ForInStatement",
      "start": 865,
      "end": 933,
      "left": {
        "type": "VariableDeclaration",
        "start": 870,
        "end": 877,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 876,
            "end": 877,
            "id": {
              "type": "Identifier",
              "start": 876,
              "end": 877,
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
        "start": 881,
        "end": 883,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 885,
        "end": 933,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 891,
            "end": 916,
            "expression": {
              "type": "FunctionExpression",
              "start": 892,
              "end": 914,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 903,
                "end": 914,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 905,
                    "end": 913,
                    "argument": {
                      "type": "Identifier",
                      "start": 912,
                      "end": 913,
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
            "start": 921,
            "end": 931,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 922,
              "end": 929,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 928,
                "end": 929,
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
      "start": 935,
      "end": 1003,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 940,
        "end": 947,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 946,
            "end": 947,
            "id": {
              "type": "Identifier",
              "start": 946,
              "end": 947,
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
        "start": 951,
        "end": 953,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 955,
        "end": 1003,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 961,
            "end": 986,
            "expression": {
              "type": "FunctionExpression",
              "start": 962,
              "end": 984,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 973,
                "end": 984,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 975,
                    "end": 983,
                    "argument": {
                      "type": "Identifier",
                      "start": 982,
                      "end": 983,
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
            "start": 991,
            "end": 1001,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 992,
              "end": 999,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 998,
                "end": 999,
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
      "start": 1005,
      "end": 1079,
      "init": {
        "type": "VariableDeclaration",
        "start": 1010,
        "end": 1021,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1016,
            "end": 1021,
            "id": {
              "type": "Identifier",
              "start": 1016,
              "end": 1017,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1020,
              "end": 1021,
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
        "start": 1023,
        "end": 1028,
        "left": {
          "type": "Identifier",
          "start": 1023,
          "end": 1024,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1027,
          "end": 1028,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1031,
        "end": 1079,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1037,
            "end": 1062,
            "expression": {
              "type": "FunctionExpression",
              "start": 1038,
              "end": 1060,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1049,
                "end": 1060,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1051,
                    "end": 1059,
                    "argument": {
                      "type": "Identifier",
                      "start": 1058,
                      "end": 1059,
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
            "start": 1067,
            "end": 1077,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1068,
              "end": 1075,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1074,
                "end": 1075,
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
      "start": 1081,
      "end": 1162,
      "test": {
        "type": "BinaryExpression",
        "start": 1088,
        "end": 1095,
        "left": {
          "type": "Literal",
          "start": 1088,
          "end": 1089,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1094,
          "end": 1095,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1097,
        "end": 1162,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1103,
            "end": 1115,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1109,
                "end": 1114,
                "id": {
                  "type": "Identifier",
                  "start": 1109,
                  "end": 1110,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1113,
                  "end": 1114,
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
            "start": 1120,
            "end": 1145,
            "expression": {
              "type": "FunctionExpression",
              "start": 1121,
              "end": 1143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1132,
                "end": 1143,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1134,
                    "end": 1142,
                    "argument": {
                      "type": "Identifier",
                      "start": 1141,
                      "end": 1142,
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
            "start": 1150,
            "end": 1160,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1151,
              "end": 1158,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1157,
                "end": 1158,
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
      "start": 1164,
      "end": 1248,
      "body": {
        "type": "BlockStatement",
        "start": 1167,
        "end": 1232,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1173,
            "end": 1185,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1179,
                "end": 1184,
                "id": {
                  "type": "Identifier",
                  "start": 1179,
                  "end": 1180,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1183,
                  "end": 1184,
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
            "start": 1190,
            "end": 1215,
            "expression": {
              "type": "FunctionExpression",
              "start": 1191,
              "end": 1213,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1202,
                "end": 1213,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1204,
                    "end": 1212,
                    "argument": {
                      "type": "Identifier",
                      "start": 1211,
                      "end": 1212,
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
            "start": 1220,
            "end": 1230,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1221,
              "end": 1228,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1227,
                "end": 1228,
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
        "start": 1240,
        "end": 1247,
        "left": {
          "type": "Literal",
          "start": 1240,
          "end": 1241,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1246,
          "end": 1247,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 1250,
      "end": 1341,
      "init": {
        "type": "VariableDeclaration",
        "start": 1255,
        "end": 1266,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1261,
            "end": 1266,
            "id": {
              "type": "Identifier",
              "start": 1261,
              "end": 1262,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1265,
              "end": 1266,
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
        "start": 1268,
        "end": 1273,
        "left": {
          "type": "Identifier",
          "start": 1268,
          "end": 1269,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1272,
          "end": 1273,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1276,
        "end": 1341,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1282,
            "end": 1294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1288,
                "end": 1293,
                "id": {
                  "type": "Identifier",
                  "start": 1288,
                  "end": 1289,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1292,
                  "end": 1293,
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
            "start": 1299,
            "end": 1324,
            "expression": {
              "type": "FunctionExpression",
              "start": 1300,
              "end": 1322,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1311,
                "end": 1322,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1313,
                    "end": 1321,
                    "argument": {
                      "type": "Identifier",
                      "start": 1320,
                      "end": 1321,
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
            "start": 1329,
            "end": 1339,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1330,
              "end": 1337,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1336,
                "end": 1337,
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
      "start": 1343,
      "end": 1432,
      "init": {
        "type": "VariableDeclaration",
        "start": 1348,
        "end": 1366,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1354,
            "end": 1359,
            "id": {
              "type": "Identifier",
              "start": 1354,
              "end": 1355,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1358,
              "end": 1359,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1361,
            "end": 1366,
            "id": {
              "type": "Identifier",
              "start": 1361,
              "end": 1362,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1365,
              "end": 1366,
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
        "start": 1368,
        "end": 1373,
        "left": {
          "type": "Identifier",
          "start": 1368,
          "end": 1369,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1372,
          "end": 1373,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1376,
        "end": 1432,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1382,
            "end": 1411,
            "expression": {
              "type": "FunctionExpression",
              "start": 1383,
              "end": 1409,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1394,
                "end": 1409,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1396,
                    "end": 1408,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1403,
                      "end": 1408,
                      "left": {
                        "type": "Identifier",
                        "start": 1403,
                        "end": 1404,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1407,
                        "end": 1408,
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
            "start": 1416,
            "end": 1430,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1417,
              "end": 1428,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1423,
                "end": 1428,
                "left": {
                  "type": "Identifier",
                  "start": 1423,
                  "end": 1424,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1427,
                  "end": 1428,
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
      "start": 1434,
      "end": 1530,
      "test": {
        "type": "BinaryExpression",
        "start": 1441,
        "end": 1448,
        "left": {
          "type": "Literal",
          "start": 1441,
          "end": 1442,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1447,
          "end": 1448,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1450,
        "end": 1530,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1456,
            "end": 1475,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1462,
                "end": 1467,
                "id": {
                  "type": "Identifier",
                  "start": 1462,
                  "end": 1463,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1466,
                  "end": 1467,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1469,
                "end": 1474,
                "id": {
                  "type": "Identifier",
                  "start": 1469,
                  "end": 1470,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1473,
                  "end": 1474,
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
            "start": 1480,
            "end": 1509,
            "expression": {
              "type": "FunctionExpression",
              "start": 1481,
              "end": 1507,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1492,
                "end": 1507,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1494,
                    "end": 1506,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1501,
                      "end": 1506,
                      "left": {
                        "type": "Identifier",
                        "start": 1501,
                        "end": 1502,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1505,
                        "end": 1506,
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
            "start": 1514,
            "end": 1528,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1515,
              "end": 1526,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1521,
                "end": 1526,
                "left": {
                  "type": "Identifier",
                  "start": 1521,
                  "end": 1522,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1525,
                  "end": 1526,
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
      "start": 1532,
      "end": 1631,
      "body": {
        "type": "BlockStatement",
        "start": 1535,
        "end": 1615,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1541,
            "end": 1560,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1547,
                "end": 1552,
                "id": {
                  "type": "Identifier",
                  "start": 1547,
                  "end": 1548,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1551,
                  "end": 1552,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1554,
                "end": 1559,
                "id": {
                  "type": "Identifier",
                  "start": 1554,
                  "end": 1555,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1558,
                  "end": 1559,
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
            "start": 1565,
            "end": 1594,
            "expression": {
              "type": "FunctionExpression",
              "start": 1566,
              "end": 1592,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1577,
                "end": 1592,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1579,
                    "end": 1591,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1586,
                      "end": 1591,
                      "left": {
                        "type": "Identifier",
                        "start": 1586,
                        "end": 1587,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1590,
                        "end": 1591,
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
            "start": 1599,
            "end": 1613,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1600,
              "end": 1611,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1606,
                "end": 1611,
                "left": {
                  "type": "Identifier",
                  "start": 1606,
                  "end": 1607,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1610,
                  "end": 1611,
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
        "start": 1623,
        "end": 1630,
        "left": {
          "type": "Literal",
          "start": 1623,
          "end": 1624,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1629,
          "end": 1630,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 1633,
      "end": 1732,
      "init": {
        "type": "VariableDeclaration",
        "start": 1638,
        "end": 1649,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1644,
            "end": 1649,
            "id": {
              "type": "Identifier",
              "start": 1644,
              "end": 1645,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1648,
              "end": 1649,
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
        "start": 1651,
        "end": 1656,
        "left": {
          "type": "Identifier",
          "start": 1651,
          "end": 1652,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1655,
          "end": 1656,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 1659,
        "end": 1732,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1665,
            "end": 1677,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1671,
                "end": 1676,
                "id": {
                  "type": "Identifier",
                  "start": 1671,
                  "end": 1672,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1675,
                  "end": 1676,
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
            "start": 1682,
            "end": 1711,
            "expression": {
              "type": "FunctionExpression",
              "start": 1683,
              "end": 1709,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1694,
                "end": 1709,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1696,
                    "end": 1708,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1703,
                      "end": 1708,
                      "left": {
                        "type": "Identifier",
                        "start": 1703,
                        "end": 1704,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1707,
                        "end": 1708,
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
            "start": 1716,
            "end": 1730,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1717,
              "end": 1728,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1723,
                "end": 1728,
                "left": {
                  "type": "Identifier",
                  "start": 1723,
                  "end": 1724,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1727,
                  "end": 1728,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
