__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "greeter",
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
          "start": 17,
          "end": 31,
          "name": "person",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 48,
          "name": "person2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 257,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 72,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 71,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "name": "unused",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 69,
                  "end": 71,
                  "value": 20,
                  "raw": "20"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 77,
            "end": 152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 81,
                "end": 152,
                "id": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 86,
                  "name": "maker",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 89,
                  "end": 152,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 98,
                      "end": 111,
                      "name": "child",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 103,
                        "end": 111,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 105,
                          "end": 111
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 119,
                    "end": 152,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 129,
                        "end": 146,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 133,
                            "end": 145,
                            "id": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 140,
                              "name": "unused2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 143,
                              "end": 145,
                              "value": 22,
                              "raw": "22"
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 114,
                      "end": 118
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 157,
            "end": 234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 161,
                "end": 234,
                "id": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 167,
                  "name": "maker2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 170,
                  "end": 234,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 179,
                      "end": 193,
                      "name": "child2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 185,
                        "end": 193,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 187,
                          "end": 193
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 201,
                    "end": 234,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 211,
                        "end": 228,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 215,
                            "end": 227,
                            "id": {
                              "type": "Identifier",
                              "start": 215,
                              "end": 222,
                              "name": "unused3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 225,
                              "end": 227,
                              "value": 23,
                              "raw": "23"
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 194,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 196,
                      "end": 200
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 255,
            "expression": {
              "type": "CallExpression",
              "start": 239,
              "end": 254,
              "callee": {
                "type": "Identifier",
                "start": 239,
                "end": 245,
                "name": "maker2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 246,
                  "end": 253,
                  "name": "person2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
