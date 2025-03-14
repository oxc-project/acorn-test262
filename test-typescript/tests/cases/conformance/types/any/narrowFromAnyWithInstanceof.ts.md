__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 453,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 21,
      "end": 161,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 48,
        "end": 161,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 114,
            "expression": {
              "type": "CallExpression",
              "start": 110,
              "end": 113,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 119,
            "end": 130,
            "expression": {
              "type": "CallExpression",
              "start": 119,
              "end": 129,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 121,
                  "end": 122,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 124,
                  "end": 125,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 127,
                  "end": 128,
                  "raw": "3",
                  "value": 3
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 135,
            "end": 147,
            "expression": {
              "type": "CallExpression",
              "start": 135,
              "end": 146,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 137,
                  "end": 145,
                  "raw": "\"hello!\"",
                  "value": "hello!"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 152,
            "end": 159,
            "expression": {
              "type": "MemberExpression",
              "start": 152,
              "end": 158,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 158,
                "decorators": [],
                "name": "prop",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 25,
        "end": 46,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 38,
          "end": 46,
          "decorators": [],
          "name": "Function",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 163,
      "end": 270,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 188,
        "end": 270,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 248,
            "end": 259,
            "expression": {
              "type": "CallExpression",
              "start": 248,
              "end": 258,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 248,
                "end": 256,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 256,
                  "decorators": [],
                  "name": "method",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 264,
            "end": 268,
            "expression": {
              "type": "CallExpression",
              "start": 264,
              "end": 267,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 167,
        "end": 186,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 167,
          "end": 168,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 180,
          "end": 186,
          "decorators": [],
          "name": "Object",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 272,
      "end": 389,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 296,
        "end": 389,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 363,
            "end": 373,
            "expression": {
              "type": "MemberExpression",
              "start": 363,
              "end": 372,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 365,
                "end": 372,
                "decorators": [],
                "name": "message",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 378,
            "end": 387,
            "expression": {
              "type": "MemberExpression",
              "start": 378,
              "end": 386,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 380,
                "end": 386,
                "decorators": [],
                "name": "mesage",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 276,
        "end": 294,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 289,
          "end": 294,
          "decorators": [],
          "name": "Error",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 391,
      "end": 452,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 414,
        "end": 452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 420,
            "end": 432,
            "expression": {
              "type": "CallExpression",
              "start": 420,
              "end": 431,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 420,
                "end": 429,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 421,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 429,
                  "decorators": [],
                  "name": "getDate",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 437,
            "end": 450,
            "expression": {
              "type": "CallExpression",
              "start": 437,
              "end": 449,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 437,
                "end": 447,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 447,
                  "decorators": [],
                  "name": "getHuors",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 395,
        "end": 412,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 395,
          "end": 396,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 408,
          "end": 412,
          "decorators": [],
          "name": "Date",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
