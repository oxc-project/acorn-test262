__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 215,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 215,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 23,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 35,
                      "end": 54,
                      "callee": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 42,
                        "decorators": [],
                        "name": "compose",
                        "optional": false,
                        "typeAnnotation": null
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
                          "start": 49,
                          "end": 50,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Literal",
                          "start": 52,
                          "end": 53,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 57,
                  "end": 73,
                  "argument": {
                    "type": "CallExpression",
                    "start": 64,
                    "end": 73,
                    "callee": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 67,
                      "decorators": [],
                      "name": "fn2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  }
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 77,
                  "end": 213,
                  "id": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 93,
                    "decorators": [],
                    "name": "compose",
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
                      "start": 94,
                      "end": 99,
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 101,
                      "end": 106,
                      "decorators": [],
                      "name": "level",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 108,
                      "end": 112,
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 114,
                    "end": 213,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 120,
                        "end": 166,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 124,
                          "end": 138,
                          "left": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 129,
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "find",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
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
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 171,
                        "end": 209,
                        "argument": {
                          "type": "CallExpression",
                          "start": 178,
                          "end": 209,
                          "callee": {
                            "type": "Identifier",
                            "start": 178,
                            "end": 185,
                            "decorators": [],
                            "name": "compose",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 186,
                              "end": 191,
                              "decorators": [],
                              "name": "child",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "BinaryExpression",
                              "start": 193,
                              "end": 202,
                              "left": {
                                "type": "Identifier",
                                "start": 193,
                                "end": 198,
                                "decorators": [],
                                "name": "level",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 201,
                                "end": 202,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 204,
                              "end": 208,
                              "decorators": [],
                              "name": "find",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 232,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 225,
            "end": 231,
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 257,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 256,
        "callee": {
          "type": "MemberExpression",
          "start": 243,
          "end": 254,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 254,
            "decorators": [],
            "name": "redefined",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
