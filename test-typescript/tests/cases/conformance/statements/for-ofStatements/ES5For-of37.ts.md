ES5For-of37.ts
```json
{
  "type": "Program",
  "start": 57,
  "end": 400,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 57,
      "end": 400,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 400,
        "body": [
          {
            "type": "TryStatement",
            "start": 96,
            "end": 398,
            "block": {
              "type": "BlockStatement",
              "start": 100,
              "end": 338,
              "body": [
                {
                  "type": "ForOfStatement",
                  "start": 189,
                  "end": 308,
                  "await": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 216,
                    "end": 308,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 230,
                        "end": 298,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 243,
                          "end": 298,
                          "body": [
                            {
                              "type": "ThrowStatement",
                              "start": 261,
                              "end": 284,
                              "argument": {
                                "type": "NewExpression",
                                "start": 267,
                                "end": 283,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 277,
                                    "end": 282,
                                    "raw": "'ERR'",
                                    "value": "ERR"
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 276,
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 234,
                          "end": 241,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 234,
                            "end": 235,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 240,
                            "end": 241,
                            "raw": "2",
                            "value": 2
                          }
                        }
                      }
                    ]
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 194,
                    "end": 201,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 200,
                        "end": 201,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 201,
                          "decorators": [],
                          "name": "j",
                          "optional": false
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 205,
                    "end": 214,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 206,
                        "end": 207,
                        "raw": "1",
                        "value": 1
                      },
                      {
                        "type": "Literal",
                        "start": 209,
                        "end": 210,
                        "raw": "2",
                        "value": 2
                      },
                      {
                        "type": "Literal",
                        "start": 212,
                        "end": 213,
                        "raw": "3",
                        "value": 3
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 317,
                  "end": 332,
                  "expression": {
                    "type": "CallExpression",
                    "start": 317,
                    "end": 331,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 329,
                        "end": 330,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 317,
                      "end": 328,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 324,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 328,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 339,
              "end": 398,
              "body": {
                "type": "BlockStatement",
                "start": 351,
                "end": 398,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 361,
                    "end": 392,
                    "expression": {
                      "type": "CallExpression",
                      "start": 361,
                      "end": 391,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 373,
                          "end": 382,
                          "raw": "'E %s %s'",
                          "value": "E %s %s"
                        },
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 387,
                          "end": 390,
                          "decorators": [],
                          "name": "err",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 361,
                        "end": 372,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 368,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 372,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 346,
                "end": 349,
                "decorators": [],
                "name": "err",
                "optional": false
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 62,
        "end": 69,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 69,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 73,
        "end": 88,
        "elements": [
          {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "raw": "0",
            "value": 0
          },
          {
            "type": "Literal",
            "start": 77,
            "end": 78,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 83,
            "end": 84,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 86,
            "end": 87,
            "raw": "4",
            "value": 4
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
