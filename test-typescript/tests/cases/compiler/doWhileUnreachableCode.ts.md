__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 191,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 191,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 34,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 33,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "LabeledStatement",
            "start": 39,
            "end": 172,
            "body": {
              "type": "DoWhileStatement",
              "start": 49,
              "end": 172,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 101,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 62,
                    "end": 68,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 62,
                      "end": 67,
                      "argument": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 65,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ContinueStatement",
                    "start": 77,
                    "end": 95,
                    "label": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 94,
                      "decorators": [],
                      "name": "testLoop",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "CallExpression",
                "start": 109,
                "end": 170,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 109,
                  "end": 168,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 120,
                    "end": 168,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 130,
                        "end": 140,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 134,
                            "end": 139,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 135,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 138,
                              "end": 139,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 149,
                        "end": 162,
                        "argument": {
                          "type": "Literal",
                          "start": 156,
                          "end": 161,
                          "raw": "false",
                          "value": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "label": {
              "type": "Identifier",
              "start": 39,
              "end": 47,
              "decorators": [],
              "name": "testLoop",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 178,
            "end": 189,
            "argument": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
