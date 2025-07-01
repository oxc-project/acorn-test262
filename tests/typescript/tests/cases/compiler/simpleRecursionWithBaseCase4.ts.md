__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 23
              }
            ],
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 29,
                      "end": 32
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "compose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 42
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 43,
                          "end": 47
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 49,
                          "end": 50
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 52,
                          "end": 53
                        }
                      ],
                      "optional": false,
                      "start": 35,
                      "end": 54
                    },
                    "start": 29,
                    "end": 54
                  },
                  "directive": null,
                  "start": 29,
                  "end": 54
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 67
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      }
                    ],
                    "optional": false,
                    "start": 64,
                    "end": 73
                  },
                  "start": 57,
                  "end": 73
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "compose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 93
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 99
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 106
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 112
                    }
                  ],
                  "returnType": null,
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
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 124,
                            "end": 129
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "find",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 134,
                            "end": 138
                          },
                          "start": 124,
                          "end": 138
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "level",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 155,
                                "end": 160
                              },
                              "start": 148,
                              "end": 160
                            }
                          ],
                          "start": 140,
                          "end": 166
                        },
                        "alternate": null,
                        "start": 120,
                        "end": 166
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "compose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 178,
                            "end": 185
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "child",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 191
                            },
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "level",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 193,
                                "end": 198
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 201,
                                "end": 202
                              },
                              "start": 193,
                              "end": 202
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "find",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 204,
                              "end": 208
                            }
                          ],
                          "optional": false,
                          "start": 178,
                          "end": 209
                        },
                        "start": 171,
                        "end": 209
                      }
                    ],
                    "start": 114,
                    "end": 213
                  },
                  "expression": false,
                  "start": 77,
                  "end": 213
                }
              ],
              "start": 25,
              "end": 215
            },
            "expression": false,
            "start": 10,
            "end": 215
          },
          "definite": false,
          "start": 4,
          "end": 215
        }
      ],
      "declare": false,
      "start": 0,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 228
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 229,
                "end": 230
              }
            ],
            "optional": false,
            "start": 225,
            "end": 231
          },
          "definite": false,
          "start": 221,
          "end": 231
        }
      ],
      "declare": false,
      "start": 217,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "redefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 254
          },
          "optional": false,
          "computed": false,
          "start": 243,
          "end": 254
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 243,
        "end": 256
      },
      "directive": null,
      "start": 243,
      "end": 257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
