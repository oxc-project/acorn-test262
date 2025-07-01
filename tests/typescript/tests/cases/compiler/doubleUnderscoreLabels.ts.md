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
        "name": "doThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
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
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "__call",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 40,
                "end": 44
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aLabel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 62
                    },
                    "body": {
                      "type": "ForStatement",
                      "init": {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 73,
                              "end": 74
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 77,
                              "end": 78
                            },
                            "definite": false,
                            "start": 73,
                            "end": 78
                          }
                        ],
                        "declare": false,
                        "start": 69,
                        "end": 78
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 81
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 84,
                          "end": 86
                        },
                        "start": 80,
                        "end": 86
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "start": 88,
                        "end": 91
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 111,
                                "end": 112
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 117,
                                "end": 118
                              },
                              "start": 111,
                              "end": 118
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "__call",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 144,
                                    "end": 150
                                  },
                                  "start": 138,
                                  "end": 151
                                }
                              ],
                              "start": 120,
                              "end": 165
                            },
                            "alternate": null,
                            "start": 107,
                            "end": 165
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 182,
                                "end": 183
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 188,
                                "end": 189
                              },
                              "start": 182,
                              "end": 189
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "aLabel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 215,
                                    "end": 221
                                  },
                                  "start": 209,
                                  "end": 222
                                }
                              ],
                              "start": 191,
                              "end": 236
                            },
                            "alternate": null,
                            "start": 178,
                            "end": 236
                          }
                        ],
                        "start": 93,
                        "end": 246
                      },
                      "start": 64,
                      "end": 246
                    },
                    "start": 56,
                    "end": 246
                  }
                ],
                "start": 46,
                "end": 252
              },
              "start": 33,
              "end": 252
            },
            "start": 25,
            "end": 252
          }
        ],
        "start": 19,
        "end": 254
      },
      "expression": false,
      "start": 0,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 262
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 255,
        "end": 264
      },
      "directive": null,
      "start": 255,
      "end": 265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 265
}
```
