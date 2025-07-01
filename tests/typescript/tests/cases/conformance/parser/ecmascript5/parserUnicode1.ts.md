__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
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
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12,
                  "end": 19
                },
                "init": {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 22,
                  "end": 23
                },
                "definite": false,
                "start": 12,
                "end": 23
              }
            ],
            "declare": false,
            "start": 8,
            "end": 24
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 34
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 6,
                "raw": "6",
                "start": 39,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "$ERROR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 55
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "#6.1: var \\u0078x = 1; xx === 6. Actual: ",
                          "raw": "'#6.1: var \\\\u0078x = 1; xx === 6. Actual: '",
                          "start": 56,
                          "end": 100
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xx",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 106
                        },
                        "start": 56,
                        "end": 107
                      }
                    ],
                    "optional": false,
                    "start": 49,
                    "end": 108
                  },
                  "directive": null,
                  "start": 49,
                  "end": 109
                }
              ],
              "start": 42,
              "end": 113
            },
            "alternate": null,
            "start": 28,
            "end": 113
          }
        ],
        "start": 4,
        "end": 115
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 124
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ERROR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 138
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "#6.2: var \\u0078x = 1; xx === 6. Actual: ",
                      "raw": "'#6.2: var \\\\u0078x = 1; xx === 6. Actual: '",
                      "start": 139,
                      "end": 183
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "xx",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 189
                    },
                    "start": 139,
                    "end": 190
                  }
                ],
                "optional": false,
                "start": 132,
                "end": 191
              },
              "directive": null,
              "start": 132,
              "end": 192
            }
          ],
          "start": 126,
          "end": 195
        },
        "start": 116,
        "end": 195
      },
      "finalizer": null,
      "start": 0,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```
