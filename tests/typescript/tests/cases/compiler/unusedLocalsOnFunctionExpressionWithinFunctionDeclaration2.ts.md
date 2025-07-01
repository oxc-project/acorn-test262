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
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 17,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 33,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unused",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 66
                },
                "init": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 69,
                  "end": 71
                },
                "definite": false,
                "start": 60,
                "end": 71
              }
            ],
            "declare": false,
            "start": 56,
            "end": 72
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maker",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 86
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 105,
                          "end": 111
                        },
                        "start": 103,
                        "end": 111
                      },
                      "start": 98,
                      "end": 111
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 114,
                      "end": 118
                    },
                    "start": 112,
                    "end": 118
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "unused2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 133,
                              "end": 140
                            },
                            "init": {
                              "type": "Literal",
                              "value": 22,
                              "raw": "22",
                              "start": 143,
                              "end": 145
                            },
                            "definite": false,
                            "start": 133,
                            "end": 145
                          }
                        ],
                        "declare": false,
                        "start": 129,
                        "end": 146
                      }
                    ],
                    "start": 119,
                    "end": 152
                  },
                  "expression": false,
                  "start": 89,
                  "end": 152
                },
                "definite": false,
                "start": 81,
                "end": 152
              }
            ],
            "declare": false,
            "start": 77,
            "end": 152
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maker2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 167
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "child2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 187,
                          "end": 193
                        },
                        "start": 185,
                        "end": 193
                      },
                      "start": 179,
                      "end": 193
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 196,
                      "end": 200
                    },
                    "start": 194,
                    "end": 200
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "unused3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 215,
                              "end": 222
                            },
                            "init": {
                              "type": "Literal",
                              "value": 23,
                              "raw": "23",
                              "start": 225,
                              "end": 227
                            },
                            "definite": false,
                            "start": 215,
                            "end": 227
                          }
                        ],
                        "declare": false,
                        "start": 211,
                        "end": 228
                      }
                    ],
                    "start": 201,
                    "end": 234
                  },
                  "expression": false,
                  "start": 170,
                  "end": 234
                },
                "definite": false,
                "start": 161,
                "end": 234
              }
            ],
            "declare": false,
            "start": 157,
            "end": 234
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "maker2",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 245
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "person2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 253
                }
              ],
              "optional": false,
              "start": 239,
              "end": 254
            },
            "directive": null,
            "start": 239,
            "end": 255
          }
        ],
        "start": 50,
        "end": 257
      },
      "expression": false,
      "start": 0,
      "end": 257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
