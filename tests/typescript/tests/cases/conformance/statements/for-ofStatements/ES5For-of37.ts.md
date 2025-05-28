__ESTREE_TEST__:PASS:
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
      "left": {
        "type": "VariableDeclaration",
        "start": 62,
        "end": 69,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
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
            "value": 0,
            "raw": "0"
          },
          {
            "type": "Literal",
            "start": 77,
            "end": 78,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 83,
            "end": 84,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 86,
            "end": 87,
            "value": 4,
            "raw": "4"
          }
        ]
      },
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
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 194,
                    "end": 201,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 200,
                        "end": 201,
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 201,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 209,
                        "end": 210,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "start": 212,
                        "end": 213,
                        "value": 3,
                        "raw": "3"
                      }
                    ]
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 216,
                    "end": 308,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 230,
                        "end": 298,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 234,
                          "end": 241,
                          "left": {
                            "type": "Identifier",
                            "start": 234,
                            "end": 235,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 240,
                            "end": 241,
                            "value": 2,
                            "raw": "2"
                          }
                        },
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 276,
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 277,
                                    "end": 282,
                                    "value": "ERR",
                                    "raw": "'ERR'"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "alternate": null
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 317,
                      "end": 328,
                      "object": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 324,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 328,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 329,
                        "end": 330,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 339,
              "end": 398,
              "param": {
                "type": "Identifier",
                "start": 346,
                "end": 349,
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 361,
                        "end": 372,
                        "object": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 368,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 372,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 373,
                          "end": 382,
                          "value": "E %s %s",
                          "raw": "'E %s %s'"
                        },
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 387,
                          "end": 390,
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
