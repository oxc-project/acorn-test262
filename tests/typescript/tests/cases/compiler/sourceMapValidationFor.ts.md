__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 13,
              "end": 14
            },
            "definite": false,
            "start": 9,
            "end": 14
          }
        ],
        "declare": false,
        "start": 5,
        "end": 14
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 20,
          "end": 22
        },
        "start": 16,
        "end": 22
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 25
        },
        "start": 24,
        "end": 27
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WScript",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 42
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Echo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 47
                },
                "optional": false,
                "computed": false,
                "start": 35,
                "end": 47
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "i: ",
                    "raw": "\"i: \"",
                    "start": 48,
                    "end": 53
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  },
                  "start": 48,
                  "end": 57
                }
              ],
              "optional": false,
              "start": 35,
              "end": 58
            },
            "directive": null,
            "start": 35,
            "end": 59
          }
        ],
        "start": 29,
        "end": 61
      },
      "start": 0,
      "end": 61
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 68
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 71,
          "end": 72
        },
        "start": 67,
        "end": 72
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 75
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 78,
          "end": 80
        },
        "start": 74,
        "end": 80
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 83
        },
        "start": 82,
        "end": 85
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WScript",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 100
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Echo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 105
                },
                "optional": false,
                "computed": false,
                "start": 93,
                "end": 105
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "i: ",
                    "raw": "\"i: \"",
                    "start": 106,
                    "end": 111
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "start": 106,
                  "end": 115
                }
              ],
              "optional": false,
              "start": 93,
              "end": 116
            },
            "directive": null,
            "start": 93,
            "end": 117
          }
        ],
        "start": 87,
        "end": 119
      },
      "start": 62,
      "end": 119
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 133,
              "end": 134
            },
            "definite": false,
            "start": 129,
            "end": 134
          }
        ],
        "declare": false,
        "start": 125,
        "end": 134
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 137
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 140,
          "end": 142
        },
        "start": 136,
        "end": 142
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "start": 152,
              "end": 155
            },
            "directive": null,
            "start": 152,
            "end": 156
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 170,
                "end": 171
              },
              "start": 165,
              "end": 171
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 183,
                  "end": 192
                }
              ],
              "start": 173,
              "end": 198
            },
            "alternate": null,
            "start": 161,
            "end": 198
          }
        ],
        "start": 146,
        "end": 200
      },
      "start": 120,
      "end": 200
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 207
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 210,
          "end": 211
        },
        "start": 206,
        "end": 211
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 217,
          "end": 219
        },
        "start": 213,
        "end": 219
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "start": 228,
              "end": 231
            },
            "directive": null,
            "start": 228,
            "end": 232
          }
        ],
        "start": 222,
        "end": 234
      },
      "start": 201,
      "end": 234
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 248,
              "end": 249
            },
            "definite": false,
            "start": 244,
            "end": 249
          }
        ],
        "declare": false,
        "start": 240,
        "end": 249
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 253
        },
        "start": 252,
        "end": 255
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 257,
        "end": 260
      },
      "start": 235,
      "end": 260
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 267
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 270,
          "end": 271
        },
        "start": 266,
        "end": 271
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 275
        },
        "start": 274,
        "end": 277
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 279,
        "end": 282
      },
      "start": 261,
      "end": 282
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 294,
          "end": 296
        },
        "start": 290,
        "end": 296
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 299
        },
        "start": 298,
        "end": 301
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 303,
        "end": 306
      },
      "start": 283,
      "end": 306
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "start": 322,
              "end": 325
            },
            "directive": null,
            "start": 322,
            "end": 326
          }
        ],
        "start": 316,
        "end": 328
      },
      "start": 307,
      "end": 328
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              },
              "start": 344,
              "end": 347
            },
            "directive": null,
            "start": 344,
            "end": 348
          }
        ],
        "start": 338,
        "end": 350
      },
      "start": 329,
      "end": 350
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 360,
              "end": 361
            },
            "start": 356,
            "end": 361
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 364
            },
            "right": {
              "type": "Literal",
              "value": 20,
              "raw": "20",
              "start": 367,
              "end": 369
            },
            "start": 363,
            "end": 369
          }
        ],
        "start": 356,
        "end": 369
      },
      "test": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 372
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 20,
              "raw": "20",
              "start": 375,
              "end": 377
            },
            "start": 371,
            "end": 377
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 380
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 20,
              "raw": "20",
              "start": 383,
              "end": 385
            },
            "start": 379,
            "end": 385
          }
        ],
        "start": 371,
        "end": 385
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 388
        },
        "start": 387,
        "end": 390
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 392,
        "end": 395
      },
      "start": 351,
      "end": 395
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 395
}
```
