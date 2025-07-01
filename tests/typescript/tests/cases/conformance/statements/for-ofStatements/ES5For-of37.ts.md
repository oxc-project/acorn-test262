__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "init": null,
            "definite": false,
            "start": 68,
            "end": 69
          }
        ],
        "declare": false,
        "start": 62,
        "end": 69
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 74,
            "end": 75
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 77,
            "end": 78
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 80,
            "end": 81
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 83,
            "end": 84
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 86,
            "end": 87
          }
        ],
        "start": 73,
        "end": 88
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 201
                        },
                        "init": null,
                        "definite": false,
                        "start": 200,
                        "end": 201
                      }
                    ],
                    "declare": false,
                    "start": 194,
                    "end": 201
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 206,
                        "end": 207
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 209,
                        "end": 210
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 212,
                        "end": 213
                      }
                    ],
                    "start": 205,
                    "end": 214
                  },
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 234,
                            "end": 235
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 240,
                            "end": 241
                          },
                          "start": 234,
                          "end": 241
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ThrowStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 271,
                                  "end": 276
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "ERR",
                                    "raw": "'ERR'",
                                    "start": 277,
                                    "end": 282
                                  }
                                ],
                                "start": 267,
                                "end": 283
                              },
                              "start": 261,
                              "end": 284
                            }
                          ],
                          "start": 243,
                          "end": 298
                        },
                        "alternate": null,
                        "start": 230,
                        "end": 298
                      }
                    ],
                    "start": 216,
                    "end": 308
                  },
                  "start": 189,
                  "end": 308
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 324
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 328
                      },
                      "optional": false,
                      "computed": false,
                      "start": 317,
                      "end": 328
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 330
                      }
                    ],
                    "optional": false,
                    "start": 317,
                    "end": 331
                  },
                  "directive": null,
                  "start": 317,
                  "end": 332
                }
              ],
              "start": 100,
              "end": 338
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 349
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 368
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 372
                        },
                        "optional": false,
                        "computed": false,
                        "start": 361,
                        "end": 372
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "E %s %s",
                          "raw": "'E %s %s'",
                          "start": 373,
                          "end": 382
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 385
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 387,
                          "end": 390
                        }
                      ],
                      "optional": false,
                      "start": 361,
                      "end": 391
                    },
                    "directive": null,
                    "start": 361,
                    "end": 392
                  }
                ],
                "start": 351,
                "end": 398
              },
              "start": 339,
              "end": 398
            },
            "finalizer": null,
            "start": 96,
            "end": 398
          }
        ],
        "start": 90,
        "end": 400
      },
      "start": 57,
      "end": 400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 400
}
```
