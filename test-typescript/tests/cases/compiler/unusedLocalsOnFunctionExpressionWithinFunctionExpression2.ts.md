unusedLocalsOnFunctionExpressionWithinFunctionExpression2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 266,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "greeter",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 14,
            "end": 266,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 266,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 63,
                  "end": 79,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 67,
                      "end": 78,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 73,
                        "decorators": [],
                        "name": "unused",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 76,
                        "end": 78,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 84,
                  "end": 160,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 160,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 93,
                        "decorators": [],
                        "name": "maker",
                        "optional": false
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 96,
                        "end": 160,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 127,
                          "end": 160,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 137,
                              "end": 154,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 141,
                                  "end": 153,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 141,
                                    "end": 148,
                                    "decorators": [],
                                    "name": "unused2",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 151,
                                    "end": 153,
                                    "raw": "22",
                                    "value": 22
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var"
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 106,
                            "end": 119,
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 111,
                              "end": 119,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 113,
                                "end": 119
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 120,
                          "end": 126,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 122,
                            "end": 126
                          }
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 165,
                  "end": 243,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 169,
                      "end": 243,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 175,
                        "decorators": [],
                        "name": "maker2",
                        "optional": false
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 178,
                        "end": 243,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 210,
                          "end": 243,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 220,
                              "end": 237,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 224,
                                  "end": 236,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 224,
                                    "end": 231,
                                    "decorators": [],
                                    "name": "unused3",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 234,
                                    "end": 236,
                                    "raw": "23",
                                    "value": 23
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var"
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 188,
                            "end": 202,
                            "decorators": [],
                            "name": "child2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 194,
                              "end": 202,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 196,
                                "end": 202
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 203,
                          "end": 209,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 205,
                            "end": 209
                          }
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 248,
                  "end": 264,
                  "expression": {
                    "type": "CallExpression",
                    "start": 248,
                    "end": 263,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 255,
                        "end": 262,
                        "decorators": [],
                        "name": "person2",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 254,
                      "decorators": [],
                      "name": "maker2",
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
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 38,
                "decorators": [],
                "name": "person",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 40,
                "end": 55,
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
