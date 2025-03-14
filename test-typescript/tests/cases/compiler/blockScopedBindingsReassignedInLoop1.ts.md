__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "use",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 37,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 134,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 133,
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "start": 40,
          "end": 130,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 52,
            "end": 130,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 56,
                "end": 68,
                "directive": "use strict",
                "expression": {
                  "type": "Literal",
                  "start": 56,
                  "end": 68,
                  "raw": "'use strict'",
                  "value": "use strict"
                }
              },
              {
                "type": "ForStatement",
                "start": 71,
                "end": 128,
                "body": {
                  "type": "BlockStatement",
                  "start": 99,
                  "end": 128,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 105,
                      "end": 124,
                      "expression": {
                        "type": "CallExpression",
                        "start": 105,
                        "end": 123,
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 106,
                          "end": 120,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 112,
                            "end": 120,
                            "arguments": [
                              {
                                "type": "UpdateExpression",
                                "start": 116,
                                "end": 119,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 118,
                                  "end": 119,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false
                                },
                                "operator": "++",
                                "prefix": true
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 115,
                              "decorators": [],
                              "name": "use",
                              "optional": false
                            },
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "VariableDeclaration",
                  "start": 76,
                  "end": 85,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 80,
                      "end": 85,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 84,
                        "end": 85,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 87,
                  "end": 92,
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 91,
                    "end": 92,
                    "raw": "9",
                    "value": 9
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "start": 94,
                  "end": 97,
                  "argument": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": true
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
