__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "fn2",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 215,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 25,
              "end": 215,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 29,
                  "end": 54,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 29,
                    "end": 54,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 32,
                      "decorators": [],
                      "name": "fn2",
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 35,
                      "end": 54,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 43,
                          "end": 47
                        },
                        {
                          "type": "Literal",
                          "start": 49,
                          "end": 50,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "Literal",
                          "start": 52,
                          "end": 53,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 42,
                        "decorators": [],
                        "name": "compose",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 57,
                  "end": 73,
                  "argument": {
                    "type": "CallExpression",
                    "start": 64,
                    "end": 73,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 67,
                      "decorators": [],
                      "name": "fn2",
                      "optional": false
                    },
                    "optional": false
                  }
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 77,
                  "end": 213,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 114,
                    "end": 213,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 120,
                        "end": 166,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 140,
                          "end": 166,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 148,
                              "end": 160,
                              "argument": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 160,
                                "decorators": [],
                                "name": "level",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 124,
                          "end": 138,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 129,
                            "decorators": [],
                            "name": "child",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "find",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 171,
                        "end": 209,
                        "argument": {
                          "type": "CallExpression",
                          "start": 178,
                          "end": 209,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 186,
                              "end": 191,
                              "decorators": [],
                              "name": "child",
                              "optional": false
                            },
                            {
                              "type": "BinaryExpression",
                              "start": 193,
                              "end": 202,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 193,
                                "end": 198,
                                "decorators": [],
                                "name": "level",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 201,
                                "end": 202,
                                "raw": "1",
                                "value": 1
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 204,
                              "end": 208,
                              "decorators": [],
                              "name": "find",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 178,
                            "end": 185,
                            "decorators": [],
                            "name": "compose",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 93,
                    "decorators": [],
                    "name": "compose",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 94,
                      "end": 99,
                      "decorators": [],
                      "name": "child",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 101,
                      "end": 106,
                      "decorators": [],
                      "name": "level",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 108,
                      "end": 112,
                      "decorators": [],
                      "name": "find",
                      "optional": false
                    }
                  ]
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
                "start": 19,
                "end": 23,
                "decorators": [],
                "name": "name",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 231,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 225,
            "end": 231,
            "arguments": [
              {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "decorators": [],
              "name": "fn2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 257,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 256,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 243,
          "end": 254,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 254,
            "decorators": [],
            "name": "redefined",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
