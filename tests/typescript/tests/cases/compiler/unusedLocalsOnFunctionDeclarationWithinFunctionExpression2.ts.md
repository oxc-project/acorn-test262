__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 252,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 14,
            "end": 252,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 252,
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
                        "optional": false,
                        "typeAnnotation": null
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
                  "type": "FunctionDeclaration",
                  "start": 84,
                  "end": 153,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 120,
                    "end": 153,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 130,
                        "end": 147,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 134,
                            "end": 146,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 141,
                              "decorators": [],
                              "name": "unused2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 144,
                              "end": 146,
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
                  "id": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 98,
                    "decorators": [],
                    "name": "maker",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 112,
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 104,
                        "end": 112,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 106,
                          "end": 112
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 115,
                      "end": 119
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 158,
                  "end": 229,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 196,
                    "end": 229,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 206,
                        "end": 223,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 210,
                            "end": 222,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 210,
                              "end": 217,
                              "decorators": [],
                              "name": "unused3",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 220,
                              "end": 222,
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
                  "id": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 173,
                    "decorators": [],
                    "name": "maker2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 174,
                      "end": 188,
                      "decorators": [],
                      "name": "child2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 180,
                        "end": 188,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 182,
                          "end": 188
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 191,
                      "end": 195
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 234,
                  "end": 250,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 234,
                    "end": 249,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 241,
                        "end": 248,
                        "decorators": [],
                        "name": "person2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 240,
                      "decorators": [],
                      "name": "maker2",
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
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
