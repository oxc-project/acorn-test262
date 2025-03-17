__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 200,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 200,
        "body": [
          {
            "type": "ForStatement",
            "start": 20,
            "end": 198,
            "body": {
              "type": "BlockStatement",
              "start": 60,
              "end": 198,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 70,
                  "end": 94,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 74,
                      "end": 93,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 78,
                        "end": 93,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 84,
                          "end": 93,
                          "operator": "+",
                          "left": {
                            "type": "UpdateExpression",
                            "start": 84,
                            "end": 87,
                            "argument": {
                              "type": "Identifier",
                              "start": 84,
                              "end": 85,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "++",
                            "prefix": false
                          },
                          "right": {
                            "type": "UpdateExpression",
                            "start": 90,
                            "end": 93,
                            "argument": {
                              "type": "Identifier",
                              "start": 90,
                              "end": 91,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "++",
                            "prefix": false
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "IfStatement",
                  "start": 103,
                  "end": 192,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 162,
                    "end": 192,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 176,
                        "end": 182,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 176,
                          "end": 181,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 180,
                            "end": 181,
                            "raw": "5",
                            "value": 5
                          }
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 115,
                    "end": 148,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 129,
                        "end": 138,
                        "argument": {
                          "type": "Literal",
                          "start": 136,
                          "end": 137,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 107,
                    "end": 113,
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 112,
                      "end": 113,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 25,
              "end": 41,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 34,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 36,
                  "end": 41,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 40,
                    "end": 41,
                    "raw": "2",
                    "value": 2
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 43,
              "end": 48,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "update": {
              "type": "SequenceExpression",
              "start": 50,
              "end": 58,
              "expressions": [
                {
                  "type": "UpdateExpression",
                  "start": 50,
                  "end": 53,
                  "argument": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": true
                },
                {
                  "type": "UpdateExpression",
                  "start": 55,
                  "end": 58,
                  "argument": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "--",
                  "prefix": true
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
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
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
