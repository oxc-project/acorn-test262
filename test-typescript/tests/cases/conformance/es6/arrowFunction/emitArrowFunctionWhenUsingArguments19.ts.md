__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 443,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 443,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 443,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 37,
            "end": 387,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 50,
              "end": 387,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 60,
                  "end": 80,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 64,
                      "end": 79,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 74,
                        "decorators": [],
                        "name": "_arguments",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 77,
                        "end": 79,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 142,
                  "end": 381,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 155,
                    "end": 381,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 169,
                        "end": 199,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 173,
                            "end": 198,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 180,
                              "decorators": [],
                              "name": "capture",
                              "optional": false
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 183,
                              "end": 198,
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "start": 189,
                                "end": 198,
                                "decorators": [],
                                "name": "arguments",
                                "optional": false
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 273,
                        "end": 289,
                        "expression": {
                          "type": "CallExpression",
                          "start": 273,
                          "end": 288,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 277,
                              "end": 287,
                              "decorators": [],
                              "name": "_arguments",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 273,
                            "end": 276,
                            "decorators": [],
                            "name": "foo",
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
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "h",
                    "optional": false
                  },
                  "params": []
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "params": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 393,
            "end": 441,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 414,
              "end": 441,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 424,
                  "end": 435,
                  "argument": {
                    "type": "Literal",
                    "start": 431,
                    "end": 434,
                    "raw": "100",
                    "value": 100
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 402,
              "end": 405,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 406,
                "end": 412,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 407,
                  "end": 412,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 409,
                    "end": 412
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
