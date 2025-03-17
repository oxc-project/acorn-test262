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
        "name": "use",
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
          "start": 21,
          "end": 30,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
        "callee": {
          "type": "FunctionExpression",
          "start": 40,
          "end": 130,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 80,
                      "end": 85,
                      "id": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "let",
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
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "CallExpression",
                            "start": 112,
                            "end": 120,
                            "callee": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 115,
                              "name": "use",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                  "name": "i",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
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
