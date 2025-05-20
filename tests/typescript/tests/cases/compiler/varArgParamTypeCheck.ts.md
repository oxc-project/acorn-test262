__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 48,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "sequence",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 18,
          "end": 43,
          "argument": {
            "type": "Identifier",
            "start": 21,
            "end": 30,
            "decorators": [],
            "name": "sequences",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 43,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 31,
              "end": 43,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 41,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 32,
                    "end": 40,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 35,
                        "end": 39
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 67,
        "decorators": [],
        "name": "callback",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 80,
          "decorators": [],
          "name": "clb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 80,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 72,
              "end": 80,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 74,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 76,
                  "end": 80
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 292,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 291,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 101,
            "end": 123,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 116,
              "end": 123,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "FunctionExpression",
            "start": 129,
            "end": 206,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 144,
              "end": 206,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 154,
                  "end": 200,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 154,
                    "end": 199,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 163,
                        "end": 198,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 167,
                          "end": 198,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 181,
                              "end": 188,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 181,
                                "end": 187,
                                "arguments": [],
                                "callee": {
                                  "type": "ThisExpression",
                                  "start": 181,
                                  "end": 185
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 162,
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 138,
              "end": 141,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "FunctionExpression",
            "start": 212,
            "end": 289,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 227,
              "end": 289,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 237,
                  "end": 283,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 237,
                    "end": 282,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 246,
                        "end": 281,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 250,
                          "end": 281,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 264,
                              "end": 271,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 264,
                                "end": 270,
                                "arguments": [],
                                "callee": {
                                  "type": "ThisExpression",
                                  "start": 264,
                                  "end": 268
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 245,
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 95,
          "decorators": [],
          "name": "sequence",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
