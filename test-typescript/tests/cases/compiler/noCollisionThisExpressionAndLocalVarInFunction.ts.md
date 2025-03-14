noCollisionThisExpressionAndLocalVarInFunction.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 35,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 13,
                "end": 35,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 19,
                    "end": 33,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 22,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 23,
                        "end": 31,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 26,
                          "end": 31,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 28,
                            "end": 31
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 105,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 105,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 69,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 68,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 64,
                  "decorators": [],
                  "name": "_this",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 67,
                  "end": 68,
                  "raw": "5",
                  "value": 5
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 103,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 102,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 100,
                    "expression": {
                      "type": "CallExpression",
                      "start": 81,
                      "end": 99,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 93,
                          "end": 98,
                          "decorators": [],
                          "name": "_this",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 81,
                        "end": 92,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 88,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 92,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
