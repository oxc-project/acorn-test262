capturedLetConstInLoop11_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 40,
      "body": {
        "type": "BlockStatement",
        "start": 9,
        "end": 40,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 15,
            "end": 25,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 24,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 23,
                  "end": 24,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 30,
            "end": 38,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 30,
              "end": 37,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "init": null,
      "test": null,
      "update": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 168,
        "body": [
          {
            "type": "ForStatement",
            "start": 63,
            "end": 166,
            "body": {
              "type": "BlockStatement",
              "start": 72,
              "end": 166,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 94,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 93,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "SwitchStatement",
                  "start": 103,
                  "end": 160,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 127,
                      "end": 150,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 135,
                          "end": 150,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 142,
                            "end": 149,
                            "async": false,
                            "body": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 149,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": []
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 132,
                        "end": 133,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ]
            },
            "init": null,
            "test": null,
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
