__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "doThing",
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
        "start": 19,
        "end": 254,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 25,
            "end": 252,
            "label": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "__call",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "WhileStatement",
              "start": 33,
              "end": 252,
              "test": {
                "type": "Literal",
                "start": 40,
                "end": 44,
                "value": true,
                "raw": "true"
              },
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 252,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 56,
                    "end": 246,
                    "label": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 62,
                      "decorators": [],
                      "name": "aLabel",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "body": {
                      "type": "ForStatement",
                      "start": 64,
                      "end": 246,
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 69,
                        "end": 78,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 73,
                            "end": 78,
                            "id": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 74,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 77,
                              "end": 78,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 80,
                        "end": 86,
                        "left": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 81,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "start": 84,
                          "end": 86,
                          "value": 10,
                          "raw": "10"
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 88,
                        "end": 91,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 93,
                        "end": 246,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 107,
                            "end": 165,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 111,
                              "end": 118,
                              "left": {
                                "type": "Identifier",
                                "start": 111,
                                "end": 112,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 117,
                                "end": 118,
                                "value": 3,
                                "raw": "3"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 120,
                              "end": 165,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 138,
                                  "end": 151,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 144,
                                    "end": 150,
                                    "decorators": [],
                                    "name": "__call",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 178,
                            "end": 236,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 182,
                              "end": 189,
                              "left": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 183,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 188,
                                "end": 189,
                                "value": 5,
                                "raw": "5"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 191,
                              "end": 236,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 209,
                                  "end": 222,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 215,
                                    "end": 221,
                                    "decorators": [],
                                    "name": "aLabel",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 265,
      "expression": {
        "type": "CallExpression",
        "start": 255,
        "end": 264,
        "callee": {
          "type": "Identifier",
          "start": 255,
          "end": 262,
          "decorators": [],
          "name": "doThing",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
