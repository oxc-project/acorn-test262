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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 12,
                "end": 23,
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
                  "value": 6,
                  "raw": "6"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 28,
            "end": 113,
            "test": {
              "type": "BinaryExpression",
              "start": 32,
              "end": 40,
              "left": {
                "type": "Identifier",
                "start": 32,
                "end": 34,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 39,
                "end": 40,
                "value": 6,
                "raw": "6"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 42,
              "end": 113,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 49,
                  "end": 109,
                  "expression": {
                    "type": "CallExpression",
                    "start": 49,
                    "end": 108,
                    "callee": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 55,
                      "decorators": [],
                      "name": "$ERROR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 56,
                        "end": 107,
                        "left": {
                          "type": "Literal",
                          "start": 56,
                          "end": 100,
                          "value": "#6.1: var \\u0078x = 1; xx === 6. Actual: ",
                          "raw": "'#6.1: var \\\\u0078x = 1; xx === 6. Actual: '"
                        },
                        "operator": "+",
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
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 116,
        "end": 195,
        "param": {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 126,
          "end": 195,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 132,
              "end": 192,
              "expression": {
                "type": "CallExpression",
                "start": 132,
                "end": 191,
                "callee": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 138,
                  "decorators": [],
                  "name": "$ERROR",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 139,
                    "end": 190,
                    "left": {
                      "type": "Literal",
                      "start": 139,
                      "end": 183,
                      "value": "#6.2: var \\u0078x = 1; xx === 6. Actual: ",
                      "raw": "'#6.2: var \\\\u0078x = 1; xx === 6. Actual: '"
                    },
                    "operator": "+",
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
                "optional": false
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
