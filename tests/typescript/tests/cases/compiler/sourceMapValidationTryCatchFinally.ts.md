__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 23
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 27
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 30,
                  "end": 31
                },
                "start": 26,
                "end": 31
              },
              "start": 22,
              "end": 31
            },
            "directive": null,
            "start": 22,
            "end": 32
          }
        ],
        "start": 16,
        "end": 34
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 43
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 56
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 59,
                    "end": 60
                  },
                  "start": 55,
                  "end": 60
                },
                "start": 51,
                "end": 60
              },
              "directive": null,
              "start": 51,
              "end": 61
            }
          ],
          "start": 45,
          "end": 63
        },
        "start": 35,
        "end": 63
      },
      "finalizer": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 83
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 86,
                  "end": 88
                },
                "start": 82,
                "end": 88
              },
              "start": 78,
              "end": 88
            },
            "directive": null,
            "start": 78,
            "end": 89
          }
        ],
        "start": 72,
        "end": 91
      },
      "start": 12,
      "end": 91
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 110,
                  "end": 111
                },
                "start": 106,
                "end": 111
              },
              "start": 102,
              "end": 111
            },
            "directive": null,
            "start": 102,
            "end": 112
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 132
              },
              "typeArguments": null,
              "arguments": [],
              "start": 123,
              "end": 134
            },
            "start": 117,
            "end": 135
          }
        ],
        "start": 96,
        "end": 137
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 146
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 155
                },
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 159
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 162,
                    "end": 163
                  },
                  "start": 158,
                  "end": 163
                },
                "start": 154,
                "end": 163
              },
              "directive": null,
              "start": 154,
              "end": 164
            }
          ],
          "start": 148,
          "end": 166
        },
        "start": 138,
        "end": 166
      },
      "finalizer": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 182
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 189,
                  "end": 191
                },
                "start": 185,
                "end": 191
              },
              "start": 181,
              "end": 191
            },
            "directive": null,
            "start": 181,
            "end": 192
          }
        ],
        "start": 175,
        "end": 194
      },
      "start": 92,
      "end": 194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 194
}
```
