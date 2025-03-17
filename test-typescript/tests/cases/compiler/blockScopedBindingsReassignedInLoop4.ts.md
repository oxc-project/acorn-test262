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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
        "start": 14,
        "end": 200,
        "body": [
          {
            "type": "ForStatement",
            "start": 20,
            "end": 198,
            "init": {
              "type": "VariableDeclaration",
              "start": 25,
              "end": 41,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 34,
                  "id": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 36,
                  "end": 41,
                  "id": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 40,
                    "end": 41,
                    "value": 2,
                    "raw": "2"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 43,
              "end": 48,
              "left": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "UpdateExpression",
                  "start": 55,
                  "end": 58,
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 78,
                        "end": 93,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 84,
                          "end": 93,
                          "left": {
                            "type": "UpdateExpression",
                            "start": 84,
                            "end": 87,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 84,
                              "end": 85,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "UpdateExpression",
                            "start": 90,
                            "end": 93,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 90,
                              "end": 91,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 103,
                  "end": 192,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 107,
                    "end": 113,
                    "left": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 112,
                      "end": 113,
                      "value": 1,
                      "raw": "1"
                    }
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
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 162,
                    "end": 192,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 176,
                        "end": 182,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 176,
                          "end": 181,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 180,
                            "end": 181,
                            "value": 5,
                            "raw": "5"
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
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
