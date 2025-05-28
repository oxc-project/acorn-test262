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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "test",
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
        "start": 16,
        "end": 191,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 34,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 33,
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
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "LabeledStatement",
            "start": 39,
            "end": 172,
            "label": {
              "type": "Identifier",
              "start": 39,
              "end": 47,
              "decorators": [],
              "name": "testLoop",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 62,
                      "end": 67,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 65,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
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
                "callee": {
                  "type": "FunctionExpression",
                  "start": 109,
                  "end": 168,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 120,
                    "end": 168,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 130,
                        "end": 140,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 134,
                            "end": 139,
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
                              "value": 1,
                              "raw": "1"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 149,
                        "end": 162,
                        "argument": {
                          "type": "Literal",
                          "start": 156,
                          "end": 161,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
