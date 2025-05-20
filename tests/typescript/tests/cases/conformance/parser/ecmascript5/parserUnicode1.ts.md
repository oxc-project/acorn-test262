__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "TryStatement",
      "start": 0,
      "end": 195,
      "block": {
        "type": "BlockStatement",
        "start": 4,
        "end": 115,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 8,
            "end": 24,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 12,
                "end": 23,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 19,
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 22,
                  "end": 23,
                  "raw": "6",
                  "value": 6
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 28,
            "end": 113,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 42,
              "end": 113,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 49,
                  "end": 109,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 49,
                    "end": 108,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 56,
                        "end": 107,
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "start": 56,
                          "end": 100,
                          "raw": "'#6.1: var \\\\u0078x = 1; xx === 6. Actual: '",
                          "value": "#6.1: var \\u0078x = 1; xx === 6. Actual: "
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 106,
                          "decorators": [],
                          "name": "xx",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 55,
                      "decorators": [],
                      "name": "$ERROR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 32,
              "end": 40,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 32,
                "end": 34,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 39,
                "end": 40,
                "raw": "6",
                "value": 6
              }
            }
          }
        ]
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 116,
        "end": 195,
        "body": {
          "type": "BlockStatement",
          "start": 126,
          "end": 195,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 132,
              "end": 192,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 132,
                "end": 191,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 139,
                    "end": 190,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 139,
                      "end": 183,
                      "raw": "'#6.2: var \\\\u0078x = 1; xx === 6. Actual: '",
                      "value": "#6.2: var \\u0078x = 1; xx === 6. Actual: "
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 189,
                      "decorators": [],
                      "name": "xx",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 138,
                  "decorators": [],
                  "name": "$ERROR",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "param": {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
