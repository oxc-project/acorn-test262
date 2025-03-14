__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 408,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 98,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 98,
        "body": [
          {
            "type": "WithStatement",
            "start": 69,
            "end": 96,
            "body": {
              "type": "BlockStatement",
              "start": 78,
              "end": 96,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 88,
                  "end": 90,
                  "expression": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "object": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "x",
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
        "start": 46,
        "end": 60,
        "decorators": [],
        "name": "withStatement0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 173,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 173,
        "body": [
          {
            "type": "WithStatement",
            "start": 138,
            "end": 171,
            "body": {
              "type": "BlockStatement",
              "start": 153,
              "end": 171,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 163,
                  "end": 165,
                  "expression": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "object": {
              "type": "AwaitExpression",
              "start": 144,
              "end": 151,
              "argument": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "x",
                "optional": false
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
        "start": 115,
        "end": 129,
        "decorators": [],
        "name": "withStatement1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 175,
      "end": 270,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 270,
        "body": [
          {
            "type": "WithStatement",
            "start": 213,
            "end": 268,
            "body": {
              "type": "BlockStatement",
              "start": 222,
              "end": 268,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 232,
                  "end": 234,
                  "expression": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 243,
                  "end": 251,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 243,
                    "end": 250,
                    "argument": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 260,
                  "end": 262,
                  "expression": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 261,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              ]
            },
            "object": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "x",
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
        "start": 190,
        "end": 204,
        "decorators": [],
        "name": "withStatement2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 408,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 304,
        "end": 408,
        "body": [
          {
            "type": "WithStatement",
            "start": 310,
            "end": 406,
            "body": {
              "type": "BlockStatement",
              "start": 319,
              "end": 406,
              "body": [
                {
                  "type": "WithStatement",
                  "start": 329,
                  "end": 400,
                  "body": {
                    "type": "BlockStatement",
                    "start": 338,
                    "end": 400,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 352,
                        "end": 354,
                        "expression": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 353,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 367,
                        "end": 375,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 367,
                          "end": 374,
                          "argument": {
                            "type": "Identifier",
                            "start": 373,
                            "end": 374,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 388,
                        "end": 390,
                        "expression": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 389,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "object": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 336,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "object": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "x",
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
        "start": 287,
        "end": 301,
        "decorators": [],
        "name": "withStatement3",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
