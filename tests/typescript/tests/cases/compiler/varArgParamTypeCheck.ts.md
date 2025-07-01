__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sequence",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "sequences",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 30
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 35,
                        "end": 39
                      },
                      "start": 34,
                      "end": 39
                    },
                    "start": 32,
                    "end": 40
                  }
                ],
                "start": 31,
                "end": 41
              },
              "start": 31,
              "end": 43
            },
            "start": 30,
            "end": 43
          },
          "value": null,
          "start": 18,
          "end": 43
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 45,
        "end": 48
      },
      "expression": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callback",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "clb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 76,
                  "end": 80
                },
                "start": 74,
                "end": 80
              },
              "start": 72,
              "end": 80
            },
            "start": 71,
            "end": 80
          },
          "start": 68,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "expression": false,
      "start": 50,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "sequence",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 113
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 116,
              "end": 123
            },
            "expression": false,
            "start": 101,
            "end": 123
          },
          {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 141
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 162
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "ThisExpression",
                                  "start": 181,
                                  "end": 185
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 181,
                                "end": 187
                              },
                              "directive": null,
                              "start": 181,
                              "end": 188
                            }
                          ],
                          "start": 167,
                          "end": 198
                        },
                        "id": null,
                        "generator": false,
                        "start": 163,
                        "end": 198
                      }
                    ],
                    "optional": false,
                    "start": 154,
                    "end": 199
                  },
                  "directive": null,
                  "start": 154,
                  "end": 200
                }
              ],
              "start": 144,
              "end": 206
            },
            "expression": false,
            "start": 129,
            "end": 206
          },
          {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 224
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 245
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "ThisExpression",
                                  "start": 264,
                                  "end": 268
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 264,
                                "end": 270
                              },
                              "directive": null,
                              "start": 264,
                              "end": 271
                            }
                          ],
                          "start": 250,
                          "end": 281
                        },
                        "id": null,
                        "generator": false,
                        "start": 246,
                        "end": 281
                      }
                    ],
                    "optional": false,
                    "start": 237,
                    "end": 282
                  },
                  "directive": null,
                  "start": 237,
                  "end": 283
                }
              ],
              "start": 227,
              "end": 289
            },
            "expression": false,
            "start": 212,
            "end": 289
          }
        ],
        "optional": false,
        "start": 87,
        "end": 291
      },
      "directive": null,
      "start": 87,
      "end": 292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 292
}
```
