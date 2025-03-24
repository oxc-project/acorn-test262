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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 24,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 93,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "const",
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 149,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 132,
                        "end": 133,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
