sourceMapValidationFor.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 395,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 61,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 61,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 35,
            "end": 59,
            "expression": {
              "type": "CallExpression",
              "start": 35,
              "end": 58,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 48,
                  "end": 57,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 48,
                    "end": 53,
                    "raw": "\"i: \"",
                    "value": "i: "
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 35,
                "end": 47,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "decorators": [],
                  "name": "WScript",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "Echo",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 14,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 14,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 22,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 20,
          "end": 22,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 24,
        "end": 27,
        "argument": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 62,
      "end": 119,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 119,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 117,
            "expression": {
              "type": "CallExpression",
              "start": 93,
              "end": 116,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 106,
                  "end": 115,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 106,
                    "end": 111,
                    "raw": "\"i: \"",
                    "value": "i: "
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 93,
                "end": 105,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 100,
                  "decorators": [],
                  "name": "WScript",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "Echo",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 67,
        "end": 72,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 71,
          "end": 72,
          "raw": "0",
          "value": 0
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 74,
        "end": 80,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 75,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 78,
          "end": 80,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 82,
        "end": 85,
        "argument": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 120,
      "end": 200,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 200,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 152,
            "end": 156,
            "expression": {
              "type": "UpdateExpression",
              "start": 152,
              "end": 155,
              "argument": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "IfStatement",
            "start": 161,
            "end": 198,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 173,
              "end": 198,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 183,
                  "end": 192,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 165,
              "end": 171,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 170,
                "end": 171,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 125,
        "end": 134,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 129,
            "end": 134,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 133,
              "end": 134,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 136,
        "end": 142,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 136,
          "end": 137,
          "decorators": [],
          "name": "j",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 140,
          "end": 142,
          "raw": "10",
          "value": 10
        }
      },
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 201,
      "end": 234,
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 234,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 228,
            "end": 232,
            "expression": {
              "type": "UpdateExpression",
              "start": 228,
              "end": 231,
              "argument": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 206,
        "end": 211,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 206,
          "end": 207,
          "decorators": [],
          "name": "j",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 210,
          "end": 211,
          "raw": "0",
          "value": 0
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 213,
        "end": 219,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "decorators": [],
          "name": "j",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 217,
          "end": 219,
          "raw": "10",
          "value": 10
        }
      },
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 235,
      "end": 260,
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 260,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 240,
        "end": 249,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 244,
            "end": 249,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "k",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 248,
              "end": 249,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 252,
        "end": 255,
        "argument": {
          "type": "Identifier",
          "start": 252,
          "end": 253,
          "decorators": [],
          "name": "k",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 261,
      "end": 282,
      "body": {
        "type": "BlockStatement",
        "start": 279,
        "end": 282,
        "body": []
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 266,
        "end": 271,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 266,
          "end": 267,
          "decorators": [],
          "name": "k",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 270,
          "end": 271,
          "raw": "0",
          "value": 0
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 274,
        "end": 277,
        "argument": {
          "type": "Identifier",
          "start": 274,
          "end": 275,
          "decorators": [],
          "name": "k",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 283,
      "end": 306,
      "body": {
        "type": "BlockStatement",
        "start": 303,
        "end": 306,
        "body": []
      },
      "init": null,
      "test": {
        "type": "BinaryExpression",
        "start": 290,
        "end": 296,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "decorators": [],
          "name": "k",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 294,
          "end": 296,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 298,
        "end": 301,
        "argument": {
          "type": "Identifier",
          "start": 298,
          "end": 299,
          "decorators": [],
          "name": "k",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 307,
      "end": 328,
      "body": {
        "type": "BlockStatement",
        "start": 316,
        "end": 328,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 322,
            "end": 326,
            "expression": {
              "type": "UpdateExpression",
              "start": 322,
              "end": 325,
              "argument": {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
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
      "start": 329,
      "end": 350,
      "body": {
        "type": "BlockStatement",
        "start": 338,
        "end": 350,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 344,
            "end": 348,
            "expression": {
              "type": "UpdateExpression",
              "start": 344,
              "end": 347,
              "argument": {
                "type": "Identifier",
                "start": 344,
                "end": 345,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
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
      "start": 351,
      "end": 395,
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 395,
        "body": []
      },
      "init": {
        "type": "SequenceExpression",
        "start": 356,
        "end": 369,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 356,
            "end": 361,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 360,
              "end": 361,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 363,
            "end": 369,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 363,
              "end": 364,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 367,
              "end": 369,
              "raw": "20",
              "value": 20
            }
          }
        ]
      },
      "test": {
        "type": "SequenceExpression",
        "start": 371,
        "end": 385,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 371,
            "end": 377,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 375,
              "end": 377,
              "raw": "20",
              "value": 20
            }
          },
          {
            "type": "BinaryExpression",
            "start": 379,
            "end": 385,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 383,
              "end": 385,
              "raw": "20",
              "value": 20
            }
          }
        ]
      },
      "update": {
        "type": "UpdateExpression",
        "start": 387,
        "end": 390,
        "argument": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "decorators": [],
          "name": "j",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
}
```
