__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 274,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 274,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 274,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 36,
            "end": 170,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 36,
              "end": 169,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 36,
                "end": 50,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 42,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 50,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AssignmentExpression",
                "start": 53,
                "end": 169,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 60,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "FunctionExpression",
                  "start": 63,
                  "end": 169,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 76,
                    "end": 169,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 86,
                        "end": 163,
                        "argument": {
                          "type": "ConditionalExpression",
                          "start": 93,
                          "end": 162,
                          "alternate": {
                            "type": "CallExpression",
                            "start": 122,
                            "end": 162,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 139,
                                "end": 148,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 146,
                                    "end": 147,
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 139,
                                  "end": 145,
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              },
                              {
                                "type": "Identifier",
                                "start": 150,
                                "end": 161,
                                "decorators": [],
                                "name": "descriptors",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 122,
                              "end": 138,
                              "decorators": [],
                              "name": "defineProperties",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "start": 107,
                            "end": 119,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 114,
                                "end": 118,
                                "decorators": [],
                                "name": "base",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 107,
                              "end": 113,
                              "decorators": [],
                              "name": "create",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 94,
                            "end": 103,
                            "operator": "==",
                            "left": {
                              "type": "Identifier",
                              "start": 94,
                              "end": 95,
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 99,
                              "end": 103,
                              "raw": "null",
                              "value": null,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 175,
            "end": 247,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 247,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 185,
                  "end": 247,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 197,
                    "end": 247,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 252,
            "end": 272,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 252,
              "end": 271,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 252,
                "end": 267,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 259,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 267,
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
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
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "foo",
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
