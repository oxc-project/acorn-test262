__ESTREE_TEST__:PASS:
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
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 9,
        "end": 40,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 15,
            "end": 25,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 24,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 23,
                  "end": 24,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 30,
            "end": 38,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 30,
              "end": 37,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 168,
        "body": [
          {
            "type": "ForStatement",
            "start": 63,
            "end": 166,
            "init": null,
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 72,
              "end": 166,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 94,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 93,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "SwitchStatement",
                  "start": 103,
                  "end": 160,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 127,
                      "end": 150,
                      "test": {
                        "type": "Literal",
                        "start": 132,
                        "end": 133,
                        "value": 0,
                        "raw": "0"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 135,
                          "end": 150,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 142,
                            "end": 149,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 149,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
