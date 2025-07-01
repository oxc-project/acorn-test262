__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": false,
        "async": true,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 53
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      },
                      "start": 57,
                      "end": 65
                    },
                    "start": 55,
                    "end": 65
                  },
                  "start": 54,
                  "end": 65
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  },
                  "start": 68,
                  "end": 76
                },
                "start": 66,
                "end": 76
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 94,
                      "end": 96
                    },
                    "start": 87,
                    "end": 97
                  }
                ],
                "start": 77,
                "end": 103
              },
              "expression": false,
              "start": 41,
              "end": 103
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 121
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 125,
                        "end": 131
                      },
                      "start": 125,
                      "end": 133
                    },
                    "start": 123,
                    "end": 133
                  },
                  "start": 122,
                  "end": 133
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 136,
                    "end": 142
                  },
                  "start": 136,
                  "end": 144
                },
                "start": 134,
                "end": 144
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 162,
                      "end": 164
                    },
                    "start": 155,
                    "end": 165
                  }
                ],
                "start": 145,
                "end": 171
              },
              "expression": false,
              "start": 109,
              "end": 171
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 185,
                              "end": 191
                            },
                            "start": 185,
                            "end": 193
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 196,
                            "end": 205
                          }
                        ],
                        "start": 185,
                        "end": 205
                      },
                      "start": 183,
                      "end": 205
                    },
                    "start": 181,
                    "end": 205
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 208,
                    "end": 210
                  },
                  "definite": false,
                  "start": 181,
                  "end": 210
                }
              ],
              "declare": false,
              "start": 177,
              "end": 211
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 224,
                "end": 228
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 246
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 249,
                            "end": 252
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSNonNullExpression",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 253,
                                "end": 255
                              },
                              "start": 253,
                              "end": 256
                            }
                          ],
                          "optional": false,
                          "start": 249,
                          "end": 257
                        },
                        "definite": false,
                        "start": 244,
                        "end": 257
                      }
                    ],
                    "declare": false,
                    "start": 240,
                    "end": 258
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 267,
                        "end": 269
                      },
                      "right": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 281
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 282,
                              "end": 284
                            }
                          ],
                          "optional": false,
                          "start": 278,
                          "end": 285
                        },
                        "start": 272,
                        "end": 285
                      },
                      "start": 267,
                      "end": 285
                    },
                    "directive": null,
                    "start": 267,
                    "end": 286
                  }
                ],
                "start": 230,
                "end": 292
              },
              "start": 217,
              "end": 292
            }
          ],
          "start": 35,
          "end": 294
        },
        "id": null,
        "generator": false,
        "start": 23,
        "end": 294
      },
      "directive": null,
      "start": 22,
      "end": 296
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 296
}
```
