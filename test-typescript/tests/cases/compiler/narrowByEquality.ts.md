__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 816,
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 40,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 62,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 85,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 109,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 109,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 102,
                "end": 109
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 140,
            "name": "xUnknown",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 140,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 133,
                "end": 140
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 143,
      "end": 165,
      "test": {
        "type": "BinaryExpression",
        "start": 147,
        "end": 153,
        "left": {
          "type": "Identifier",
          "start": 147,
          "end": 148,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 155,
        "end": 165,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 163,
            "expression": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 167,
      "end": 189,
      "test": {
        "type": "BinaryExpression",
        "start": 171,
        "end": 177,
        "left": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 177,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 179,
        "end": 189,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 187,
            "expression": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 191,
      "end": 213,
      "test": {
        "type": "BinaryExpression",
        "start": 195,
        "end": 201,
        "left": {
          "type": "Identifier",
          "start": 195,
          "end": 196,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 200,
          "end": 201,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 203,
        "end": 213,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 209,
            "end": 211,
            "expression": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 215,
      "end": 237,
      "test": {
        "type": "BinaryExpression",
        "start": 219,
        "end": 225,
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 224,
          "end": 225,
          "value": 1,
          "raw": "1"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 227,
        "end": 237,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 235,
            "expression": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 239,
      "end": 262,
      "test": {
        "type": "BinaryExpression",
        "start": 243,
        "end": 250,
        "left": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 248,
          "end": 250,
          "value": "",
          "raw": "\"\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 252,
        "end": 262,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 258,
            "end": 260,
            "expression": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 264,
      "end": 290,
      "test": {
        "type": "BinaryExpression",
        "start": 268,
        "end": 278,
        "left": {
          "type": "Identifier",
          "start": 268,
          "end": 269,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 273,
          "end": 278,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 280,
        "end": 290,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 286,
            "end": 288,
            "expression": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 292,
      "end": 317,
      "test": {
        "type": "BinaryExpression",
        "start": 296,
        "end": 305,
        "left": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 301,
          "end": 305,
          "value": true,
          "raw": "true"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 307,
        "end": 317,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 313,
            "end": 315,
            "expression": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 319,
      "end": 345,
      "test": {
        "type": "BinaryExpression",
        "start": 323,
        "end": 333,
        "left": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 328,
          "end": 333,
          "value": false,
          "raw": "false"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 335,
        "end": 345,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 341,
            "end": 343,
            "expression": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 402,
            "name": "xAndObj",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 404,
      "end": 439,
      "test": {
        "type": "BinaryExpression",
        "start": 408,
        "end": 421,
        "left": {
          "type": "Identifier",
          "start": 408,
          "end": 415,
          "name": "xAndObj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "ObjectExpression",
          "start": 419,
          "end": 421,
          "properties": []
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 423,
        "end": 439,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 429,
            "end": 437,
            "expression": {
              "type": "Identifier",
              "start": 429,
              "end": 436,
              "name": "xAndObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 441,
      "end": 482,
      "test": {
        "type": "BinaryExpression",
        "start": 445,
        "end": 457,
        "left": {
          "type": "Identifier",
          "start": 445,
          "end": 446,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 450,
          "end": 457,
          "name": "xAndObj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 459,
        "end": 482,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 465,
            "end": 467,
            "expression": {
              "type": "Identifier",
              "start": 465,
              "end": 466,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 472,
            "end": 480,
            "expression": {
              "type": "Identifier",
              "start": 472,
              "end": 479,
              "name": "xAndObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 506,
      "end": 666,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 519,
        "name": "test",
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
          "start": 520,
          "end": 542,
          "name": "level",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 551,
        "end": 666,
        "body": [
          {
            "type": "IfStatement",
            "start": 557,
            "end": 650,
            "test": {
              "type": "BinaryExpression",
              "start": 561,
              "end": 576,
              "left": {
                "type": "Identifier",
                "start": 561,
                "end": 566,
                "name": "level",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "UnaryExpression",
                "start": 570,
                "end": 576,
                "operator": "+",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 576,
                  "name": "level",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 594,
                        "end": 604,
                        "name": "q2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 596,
                          "end": 604,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 598,
                            "end": 604
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 612,
                        "name": "level",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 631,
                  "end": 644,
                  "argument": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 643,
                    "name": "level",
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
            "type": "ReturnStatement",
            "start": 655,
            "end": 664,
            "argument": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 543,
        "end": 550,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 544,
          "end": 550
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 689,
      "end": 750,
      "test": {
        "type": "BinaryExpression",
        "start": 693,
        "end": 709,
        "left": {
          "type": "Identifier",
          "start": 693,
          "end": 701,
          "name": "xUnknown",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 705,
          "end": 709,
          "value": null,
          "raw": "null"
        }
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
            "expression": {
              "type": "Identifier",
              "start": 717,
              "end": 725,
              "name": "xUnknown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 734,
        "end": 750,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 740,
            "end": 748,
            "expression": {
              "type": "Identifier",
              "start": 740,
              "end": 748,
              "name": "xUnknown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 752,
      "end": 814,
      "test": {
        "type": "BinaryExpression",
        "start": 756,
        "end": 772,
        "left": {
          "type": "Identifier",
          "start": 756,
          "end": 764,
          "name": "xUnknown",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "start": 768,
          "end": 772,
          "value": null,
          "raw": "null"
        }
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
            "expression": {
              "type": "Identifier",
              "start": 780,
              "end": 788,
              "name": "xUnknown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 797,
        "end": 814,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 803,
            "end": 812,
            "expression": {
              "type": "Identifier",
              "start": 803,
              "end": 811,
              "name": "xUnknown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
