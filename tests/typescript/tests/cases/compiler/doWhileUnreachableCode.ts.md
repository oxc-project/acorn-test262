__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 29
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 32,
                  "end": 33
                },
                "definite": false,
                "start": 26,
                "end": 33
              }
            ],
            "declare": false,
            "start": 22,
            "end": 34
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "testLoop",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 47
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 65
                      },
                      "start": 62,
                      "end": 67
                    },
                    "directive": null,
                    "start": 62,
                    "end": 68
                  },
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testLoop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 94
                    },
                    "start": 77,
                    "end": 95
                  }
                ],
                "start": 52,
                "end": 101
              },
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 134,
                              "end": 135
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 138,
                              "end": 139
                            },
                            "definite": false,
                            "start": 134,
                            "end": 139
                          }
                        ],
                        "declare": false,
                        "start": 130,
                        "end": 140
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 156,
                          "end": 161
                        },
                        "start": 149,
                        "end": 162
                      }
                    ],
                    "start": 120,
                    "end": 168
                  },
                  "expression": false,
                  "start": 109,
                  "end": 168
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 109,
                "end": 170
              },
              "start": 49,
              "end": 172
            },
            "start": 39,
            "end": 172
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 188
            },
            "start": 178,
            "end": 189
          }
        ],
        "start": 16,
        "end": 191
      },
      "expression": false,
      "start": 0,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
