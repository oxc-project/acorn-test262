__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 315,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 315,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 0,
        "end": 315,
        "argument": {
          "type": "CallExpression",
          "start": 1,
          "end": 315,
          "arguments": [
            {
              "type": "FunctionExpression",
              "start": 38,
              "end": 314,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 314,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 66,
                    "end": 138,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 83,
                      "end": 138,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 97,
                          "end": 128,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 97,
                            "end": 127,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 97,
                              "end": 120,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 97,
                                "end": 101
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 120,
                                "decorators": [],
                                "name": "_trampolineEnabled",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 123,
                              "end": 127,
                              "raw": "true",
                              "value": true,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 80,
                      "decorators": [],
                      "name": "Async",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 308,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 148,
                      "end": 307,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 148,
                        "end": 192,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 148,
                          "end": 163,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 148,
                            "end": 153,
                            "decorators": [],
                            "name": "Async",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 163,
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 192,
                          "decorators": [],
                          "name": "disableTrampolineIfNecessary",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 195,
                        "end": 307,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 212,
                          "end": 307,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 226,
                              "end": 297,
                              "alternate": null,
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 233,
                                "end": 297,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 251,
                                    "end": 283,
                                    "directive": null,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 251,
                                      "end": 282,
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 251,
                                        "end": 274,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 251,
                                          "end": 255
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 256,
                                          "end": 274,
                                          "decorators": [],
                                          "name": "_trampolineEnabled",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 277,
                                        "end": 282,
                                        "raw": "false",
                                        "value": false,
                                        "regex": null,
                                        "bigint": null
                                      }
                                    }
                                  }
                                ]
                              },
                              "test": {
                                "type": "Identifier",
                                "start": 230,
                                "end": 231,
                                "decorators": [],
                                "name": "b",
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
                          "start": 204,
                          "end": 208,
                          "decorators": [],
                          "name": "dtin",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 209,
                            "end": 210,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 52,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          ],
          "callee": {
            "type": "FunctionExpression",
            "start": 1,
            "end": 32,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 32,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 22,
                  "end": 30,
                  "argument": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "f",
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
              "start": 10,
              "end": 15,
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
