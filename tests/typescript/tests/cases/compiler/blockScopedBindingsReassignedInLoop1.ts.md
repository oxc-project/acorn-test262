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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 134,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 133,
        "callee": {
          "type": "FunctionExpression",
          "start": 40,
          "end": 130,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 52,
            "end": 130,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 56,
                "end": 68,
                "expression": {
                  "type": "Literal",
                  "start": 56,
                  "end": 68,
                  "value": "use strict",
                  "raw": "'use strict'"
                },
                "directive": "use strict"
              },
              {
                "type": "ForStatement",
                "start": 71,
                "end": 128,
                "init": {
                  "type": "VariableDeclaration",
                  "start": 76,
                  "end": 85,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 80,
                      "end": 85,
                      "id": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 84,
                        "end": 85,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 87,
                  "end": 92,
                  "left": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 91,
                    "end": 92,
                    "value": 9,
                    "raw": "9"
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "start": 94,
                  "end": 97,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
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
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 106,
                          "end": 120,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "start": 112,
                            "end": 120,
                            "callee": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 115,
                              "decorators": [],
                              "name": "use",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "UpdateExpression",
                                "start": 116,
                                "end": 119,
                                "operator": "++",
                                "prefix": true,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 118,
                                  "end": 119,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "optional": false
                          },
                          "id": null,
                          "generator": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                }
              }
            ]
          },
          "expression": false
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
