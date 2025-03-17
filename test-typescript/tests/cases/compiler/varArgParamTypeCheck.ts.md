__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "sequence",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 18,
          "end": 43,
          "argument": {
            "type": "Identifier",
            "start": 21,
            "end": 30,
            "name": "sequences",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "typeParameters": null,
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
                    }
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 48,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 67,
        "name": "callback",
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
          "start": 68,
          "end": 80,
          "name": "clb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 80,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 72,
              "end": 80,
              "typeParameters": null,
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 292,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 291,
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 95,
          "name": "sequence",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 101,
            "end": 123,
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 116,
              "end": 123,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionExpression",
            "start": 129,
            "end": 206,
            "id": {
              "type": "Identifier",
              "start": 138,
              "end": 141,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 144,
              "end": 206,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 154,
                  "end": 200,
                  "expression": {
                    "type": "CallExpression",
                    "start": 154,
                    "end": 199,
                    "callee": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 162,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 163,
                        "end": 198,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 167,
                          "end": 198,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 181,
                              "end": 188,
                              "expression": {
                                "type": "CallExpression",
                                "start": 181,
                                "end": 187,
                                "callee": {
                                  "type": "ThisExpression",
                                  "start": 181,
                                  "end": 185
                                },
                                "arguments": [],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionExpression",
            "start": 212,
            "end": 289,
            "id": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 227,
              "end": 289,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 237,
                  "end": 283,
                  "expression": {
                    "type": "CallExpression",
                    "start": 237,
                    "end": 282,
                    "callee": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 245,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 246,
                        "end": 281,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 250,
                          "end": 281,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 264,
                              "end": 271,
                              "expression": {
                                "type": "CallExpression",
                                "start": 264,
                                "end": 270,
                                "callee": {
                                  "type": "ThisExpression",
                                  "start": 264,
                                  "end": 268
                                },
                                "arguments": [],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
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
