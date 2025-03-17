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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 60,
        "name": "withStatement0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 98,
        "body": [
          {
            "type": "WithStatement",
            "start": 69,
            "end": 96,
            "object": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 129,
        "name": "withStatement1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 173,
        "body": [
          {
            "type": "WithStatement",
            "start": 138,
            "end": 171,
            "object": {
              "type": "AwaitExpression",
              "start": 144,
              "end": 151,
              "argument": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 175,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 204,
        "name": "withStatement2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 270,
        "body": [
          {
            "type": "WithStatement",
            "start": 213,
            "end": 268,
            "object": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 260,
                  "end": 262,
                  "expression": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 261,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 301,
        "name": "withStatement3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 304,
        "end": 408,
        "body": [
          {
            "type": "WithStatement",
            "start": 310,
            "end": 406,
            "object": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 319,
              "end": 406,
              "body": [
                {
                  "type": "WithStatement",
                  "start": 329,
                  "end": 400,
                  "object": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 336,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
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
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 388,
                        "end": 390,
                        "expression": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 389,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
