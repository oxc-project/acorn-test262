__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 15
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 18
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "start": 22,
                  "end": 30
                }
              ],
              "start": 20,
              "end": 32
            },
            "expression": false,
            "start": 1,
            "end": 32
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 52
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Async",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 80
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 97,
                                "end": 101
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_trampolineEnabled",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 102,
                                "end": 120
                              },
                              "optional": false,
                              "computed": false,
                              "start": 97,
                              "end": 120
                            },
                            "right": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 123,
                              "end": 127
                            },
                            "start": 97,
                            "end": 127
                          },
                          "directive": null,
                          "start": 97,
                          "end": 128
                        }
                      ],
                      "start": 83,
                      "end": 138
                    },
                    "expression": false,
                    "start": 66,
                    "end": 138
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Async",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 148,
                            "end": 153
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 163
                          },
                          "optional": false,
                          "computed": false,
                          "start": 148,
                          "end": 163
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "disableTrampolineIfNecessary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 192
                        },
                        "optional": false,
                        "computed": false,
                        "start": 148,
                        "end": 192
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dtin",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 208
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 209,
                            "end": 210
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 230,
                                "end": 231
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 251,
                                          "end": 255
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "_trampolineEnabled",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 256,
                                          "end": 274
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 251,
                                        "end": 274
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 277,
                                        "end": 282
                                      },
                                      "start": 251,
                                      "end": 282
                                    },
                                    "directive": null,
                                    "start": 251,
                                    "end": 283
                                  }
                                ],
                                "start": 233,
                                "end": 297
                              },
                              "alternate": null,
                              "start": 226,
                              "end": 297
                            }
                          ],
                          "start": 212,
                          "end": 307
                        },
                        "expression": false,
                        "start": 195,
                        "end": 307
                      },
                      "start": 148,
                      "end": 307
                    },
                    "directive": null,
                    "start": 148,
                    "end": 308
                  }
                ],
                "start": 56,
                "end": 314
              },
              "expression": false,
              "start": 38,
              "end": 314
            }
          ],
          "optional": false,
          "start": 1,
          "end": 315
        },
        "prefix": true,
        "start": 0,
        "end": 315
      },
      "directive": null,
      "start": 0,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 315
}
```
