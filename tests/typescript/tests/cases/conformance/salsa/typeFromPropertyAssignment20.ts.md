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
      "expression": {
        "type": "UnaryExpression",
        "start": 0,
        "end": 315,
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "start": 1,
          "end": 315,
          "callee": {
            "type": "FunctionExpression",
            "start": 1,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 10,
              "end": 15,
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "expression": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "FunctionExpression",
              "start": 38,
              "end": 314,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 52,
                "decorators": [],
                "name": "inner",
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
                "start": 56,
                "end": 314,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 66,
                    "end": 138,
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 80,
                      "decorators": [],
                      "name": "Async",
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
                      "start": 83,
                      "end": 138,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 97,
                          "end": 128,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 97,
                            "end": 127,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 97,
                              "end": 120,
                              "object": {
                                "type": "ThisExpression",
                                "start": 97,
                                "end": 101
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 120,
                                "decorators": [],
                                "name": "_trampolineEnabled",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 123,
                              "end": 127,
                              "value": true,
                              "raw": "true"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 308,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 148,
                      "end": 307,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 148,
                        "end": 192,
                        "object": {
                          "type": "MemberExpression",
                          "start": 148,
                          "end": 163,
                          "object": {
                            "type": "Identifier",
                            "start": 148,
                            "end": 153,
                            "decorators": [],
                            "name": "Async",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 163,
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 192,
                          "decorators": [],
                          "name": "disableTrampolineIfNecessary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 195,
                        "end": 307,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 208,
                          "decorators": [],
                          "name": "dtin",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
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
                        "body": {
                          "type": "BlockStatement",
                          "start": 212,
                          "end": 307,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 226,
                              "end": 297,
                              "test": {
                                "type": "Identifier",
                                "start": 230,
                                "end": 231,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 233,
                                "end": 297,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 251,
                                    "end": 283,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 251,
                                      "end": 282,
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 251,
                                        "end": 274,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 251,
                                          "end": 255
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 256,
                                          "end": 274,
                                          "decorators": [],
                                          "name": "_trampolineEnabled",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 277,
                                        "end": 282,
                                        "value": false,
                                        "raw": "false"
                                      }
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          ]
                        },
                        "expression": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            }
          ],
          "optional": false
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
