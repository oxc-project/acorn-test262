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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "fn2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 215,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 23,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "fn2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 35,
                      "end": 54,
                      "callee": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 42,
                        "name": "compose",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      "optional": false,
                      "typeArguments": null
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
                      "name": "fn2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
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
                    "name": "compose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 94,
                      "end": 99,
                      "name": "child",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 101,
                      "end": 106,
                      "name": "level",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 108,
                      "end": 112,
                      "name": "find",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "name": "child",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "name": "find",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "level",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                            "name": "compose",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 186,
                              "end": 191,
                              "name": "child",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "BinaryExpression",
                              "start": 193,
                              "end": 202,
                              "left": {
                                "type": "Identifier",
                                "start": 193,
                                "end": 198,
                                "name": "level",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                              "name": "find",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 225,
            "end": 231,
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "name": "fn2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 254,
            "name": "redefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
