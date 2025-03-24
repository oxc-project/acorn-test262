__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 815,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 40,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 15,
                "end": 40,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 24,
                    "end": 30
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 33,
                    "end": 40
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 62,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 85,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 109,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 109,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 102,
                "end": 109
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 140,
            "decorators": [],
            "name": "xUnknown",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 140,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 133,
                "end": 140
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 143,
      "end": 165,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 155,
        "end": 165,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 163,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 147,
        "end": 153,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 147,
          "end": 148,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 167,
      "end": 189,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 179,
        "end": 189,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 187,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 171,
        "end": 177,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 177,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 191,
      "end": 213,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 203,
        "end": 213,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 209,
            "end": 211,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 195,
        "end": 201,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 195,
          "end": 196,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 200,
          "end": 201,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 215,
      "end": 237,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 227,
        "end": 237,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 235,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 219,
        "end": 225,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 224,
          "end": 225,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 239,
      "end": 262,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 252,
        "end": 262,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 258,
            "end": 260,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 243,
        "end": 250,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 248,
          "end": 250,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 264,
      "end": 290,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 280,
        "end": 290,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 286,
            "end": 288,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 268,
        "end": 278,
        "operator": "==",
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
          "start": 273,
          "end": 278,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 292,
      "end": 317,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 307,
        "end": 317,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 313,
            "end": 315,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 296,
        "end": 305,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 301,
          "end": 305,
          "raw": "true",
          "value": true
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 319,
      "end": 345,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 335,
        "end": 345,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 341,
            "end": 343,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 323,
        "end": 333,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 328,
          "end": 333,
          "raw": "false",
          "value": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 402,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 402,
            "decorators": [],
            "name": "xAndObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 402,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 368,
                "end": 402,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 368,
                    "end": 374
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 377,
                    "end": 383
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 386,
                    "end": 393
                  },
                  {
                    "type": "TSObjectKeyword",
                    "start": 396,
                    "end": 402
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 404,
      "end": 439,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 423,
        "end": 439,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 429,
            "end": 437,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 429,
              "end": 436,
              "decorators": [],
              "name": "xAndObj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 408,
        "end": 421,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 408,
          "end": 415,
          "decorators": [],
          "name": "xAndObj",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 419,
          "end": 421,
          "properties": []
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 441,
      "end": 482,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 459,
        "end": 482,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 465,
            "end": 467,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 465,
              "end": 466,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 472,
            "end": 480,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 472,
              "end": 479,
              "decorators": [],
              "name": "xAndObj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 445,
        "end": 457,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 445,
          "end": 446,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 450,
          "end": 457,
          "decorators": [],
          "name": "xAndObj",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 506,
      "end": 666,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 551,
        "end": 666,
        "body": [
          {
            "type": "IfStatement",
            "start": 557,
            "end": 650,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 578,
              "end": 650,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 588,
                  "end": 613,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 594,
                      "end": 612,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 594,
                        "end": 604,
                        "decorators": [],
                        "name": "q2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 596,
                          "end": 604,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 598,
                            "end": 604
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 612,
                        "decorators": [],
                        "name": "level",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 631,
                  "end": 644,
                  "argument": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 643,
                    "decorators": [],
                    "name": "level",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 561,
              "end": 576,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 561,
                "end": 566,
                "decorators": [],
                "name": "level",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "UnaryExpression",
                "start": 570,
                "end": 576,
                "argument": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 576,
                  "decorators": [],
                  "name": "level",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "prefix": true
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 655,
            "end": 664,
            "argument": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 519,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 520,
          "end": 542,
          "decorators": [],
          "name": "level",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 525,
            "end": 542,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 527,
              "end": 542,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 527,
                  "end": 533
                },
                {
                  "type": "TSStringKeyword",
                  "start": 536,
                  "end": 542
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 543,
        "end": 550,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 544,
          "end": 550
        }
      },
      "typeParameters": null
    },
    {
      "type": "IfStatement",
      "start": 689,
      "end": 750,
      "alternate": {
        "type": "BlockStatement",
        "start": 734,
        "end": 750,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 740,
            "end": 748,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 740,
              "end": 748,
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 711,
        "end": 728,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 717,
            "end": 726,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 717,
              "end": 725,
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 693,
        "end": 709,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 693,
          "end": 701,
          "decorators": [],
          "name": "xUnknown",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 705,
          "end": 709,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 752,
      "end": 814,
      "alternate": {
        "type": "BlockStatement",
        "start": 797,
        "end": 814,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 803,
            "end": 812,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 803,
              "end": 811,
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 774,
        "end": 791,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 780,
            "end": 789,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 780,
              "end": 788,
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 756,
        "end": 772,
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "start": 756,
          "end": 764,
          "decorators": [],
          "name": "xUnknown",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 768,
          "end": 772,
          "raw": "null",
          "value": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
