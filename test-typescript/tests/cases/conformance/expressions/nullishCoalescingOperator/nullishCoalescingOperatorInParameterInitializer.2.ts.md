nullishCoalescingOperatorInParameterInitializer.2.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 196,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 101,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 88,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 88,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 79,
                    "end": 88
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 138,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 137,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 134,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 124,
            "end": 134,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 126,
                "end": 132,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 130,
                    "end": 131,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 105,
              "end": 119,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "LogicalExpression",
                "start": 109,
                "end": 119,
                "operator": "??",
                "left": {
                  "type": "CallExpression",
                  "start": 109,
                  "end": 112,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 116,
                  "end": 119,
                  "raw": "\"d\"",
                  "value": "d"
                }
              }
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 150,
            "end": 152,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 196,
      "expression": {
        "type": "CallExpression",
        "start": 154,
        "end": 195,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 155,
          "end": 192,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 182,
            "end": 192,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 184,
                "end": 190,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 188,
                    "end": 189,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 156,
              "end": 170,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "LogicalExpression",
                "start": 160,
                "end": 170,
                "operator": "??",
                "left": {
                  "type": "CallExpression",
                  "start": 160,
                  "end": 163,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 167,
                  "end": 170,
                  "raw": "\"d\"",
                  "value": "d"
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "start": 172,
              "end": 177,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ]
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
