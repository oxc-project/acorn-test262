labeledStatementDeclarationListInLoopNoCrash2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 82,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 33,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 32,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 28,
                  "decorators": [],
                  "name": "v0",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "LabeledStatement",
            "start": 36,
            "end": 47,
            "body": {
              "type": "VariableDeclaration",
              "start": 41,
              "end": 47,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 46,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "label": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 50,
            "end": 80,
            "expression": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 78,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 77,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 71,
                      "end": 77,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 77,
                        "decorators": [],
                        "name": "v0",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 16,
        "elements": []
      }
    }
  ],
  "sourceType": "script"
}
```
