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
        "name": "test",
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
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
            "declare": false
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
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                      "name": "testLoop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                            "id": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 135,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "kind": "var",
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
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "label": {
              "type": "Identifier",
              "start": 39,
              "end": 47,
              "name": "testLoop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
