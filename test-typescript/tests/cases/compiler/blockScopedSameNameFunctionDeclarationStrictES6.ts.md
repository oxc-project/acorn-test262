__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 298,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 14,
      "end": 257,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 257,
        "body": [
          {
            "type": "IfStatement",
            "start": 44,
            "end": 221,
            "alternate": {
              "type": "BlockStatement",
              "start": 144,
              "end": 221,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 154,
                  "end": 172,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 169,
                    "end": 172,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 166,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "params": []
                },
                {
                  "type": "ExpressionStatement",
                  "start": 182,
                  "end": 188,
                  "expression": {
                    "type": "CallExpression",
                    "start": 182,
                    "end": 187,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 185,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 197,
                  "end": 205,
                  "expression": {
                    "type": "CallExpression",
                    "start": 197,
                    "end": 204,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 201,
                        "end": 203,
                        "raw": "10",
                        "value": 10
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 200,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 58,
              "end": 134,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 68,
                  "end": 86,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 83,
                    "end": 86,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 80,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "params": []
                },
                {
                  "type": "ExpressionStatement",
                  "start": 95,
                  "end": 101,
                  "expression": {
                    "type": "CallExpression",
                    "start": 95,
                    "end": 100,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 98,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 110,
                  "end": 118,
                  "expression": {
                    "type": "CallExpression",
                    "start": 110,
                    "end": 117,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 114,
                        "end": 116,
                        "raw": "10",
                        "value": 10
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 113,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 48,
              "end": 56,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 54,
                "end": 56,
                "raw": "10",
                "value": 10
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 226,
            "end": 234,
            "expression": {
              "type": "CallExpression",
              "start": 226,
              "end": 233,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 230,
                  "end": 232,
                  "raw": "10",
                  "value": 10
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 226,
                "end": 229,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 245,
            "expression": {
              "type": "CallExpression",
              "start": 239,
              "end": 244,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 239,
                "end": 242,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 36,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 36,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 30,
              "end": 36
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 266,
      "expression": {
        "type": "CallExpression",
        "start": 258,
        "end": 265,
        "arguments": [
          {
            "type": "Literal",
            "start": 262,
            "end": 264,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 258,
          "end": 261,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 273,
      "expression": {
        "type": "CallExpression",
        "start": 267,
        "end": 272,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 267,
          "end": 270,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
