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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 252,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 252,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 63,
                  "end": 79,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 67,
                      "end": 78,
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
                        "value": 20,
                        "raw": "20"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 84,
                  "end": 153,
                  "id": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 98,
                    "decorators": [],
                    "name": "maker",
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 120,
                    "end": 153,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 130,
                        "end": 147,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 134,
                            "end": 146,
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
                              "value": 22,
                              "raw": "22"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "expression": false
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 158,
                  "end": 229,
                  "id": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 173,
                    "decorators": [],
                    "name": "maker2",
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 196,
                    "end": 229,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 206,
                        "end": 223,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 210,
                            "end": 222,
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
                              "value": 23,
                              "raw": "23"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "expression": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 234,
                  "end": 250,
                  "expression": {
                    "type": "CallExpression",
                    "start": 234,
                    "end": 249,
                    "callee": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 240,
                      "decorators": [],
                      "name": "maker2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
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
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
