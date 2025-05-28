__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 296,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 296,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 23,
        "end": 294,
        "expression": false,
        "async": true,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 35,
          "end": 294,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 41,
              "end": 103,
              "id": {
                "type": "Identifier",
                "start": 50,
                "end": 53,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 65,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 57,
                      "end": 65,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 66,
                "end": 76,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 68,
                  "end": 76,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 103,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 87,
                    "end": 97,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 94,
                      "end": 96,
                      "elements": []
                    }
                  }
                ]
              },
              "expression": false
            },
            {
              "type": "FunctionDeclaration",
              "start": 109,
              "end": 171,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 121,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 133,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 125,
                      "end": 133,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 125,
                        "end": 131
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 134,
                "end": 144,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 136,
                  "end": 144,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 136,
                    "end": 142
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 155,
                    "end": 165,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 162,
                      "end": 164,
                      "elements": []
                    }
                  }
                ]
              },
              "expression": false
            },
            {
              "type": "VariableDeclaration",
              "start": 177,
              "end": 211,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 181,
                  "end": 210,
                  "id": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 205,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 183,
                      "end": 205,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 185,
                        "end": 205,
                        "types": [
                          {
                            "type": "TSArrayType",
                            "start": 185,
                            "end": 193,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 185,
                              "end": 191
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 196,
                            "end": 205
                          }
                        ]
                      }
                    }
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 208,
                    "end": 210,
                    "elements": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "WhileStatement",
              "start": 217,
              "end": 292,
              "test": {
                "type": "Literal",
                "start": 224,
                "end": 228,
                "value": true,
                "raw": "true"
              },
              "body": {
                "type": "BlockStatement",
                "start": 230,
                "end": 292,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 240,
                    "end": 258,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 244,
                        "end": 257,
                        "id": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 246,
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 249,
                          "end": 257,
                          "callee": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 252,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSNonNullExpression",
                              "start": 253,
                              "end": 256,
                              "expression": {
                                "type": "Identifier",
                                "start": 253,
                                "end": 255,
                                "decorators": [],
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 267,
                    "end": 286,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 267,
                      "end": 285,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 267,
                        "end": 269,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "AwaitExpression",
                        "start": 272,
                        "end": 285,
                        "argument": {
                          "type": "CallExpression",
                          "start": 278,
                          "end": 285,
                          "callee": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 281,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 282,
                              "end": 284,
                              "decorators": [],
                              "name": "a2",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        },
        "id": null,
        "generator": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
