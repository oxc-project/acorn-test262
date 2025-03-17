__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 134,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 41,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 29,
                  "end": 39,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 30,
                      "end": 34,
                      "name": "i",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 31,
                        "end": 34,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 33,
                          "end": 34,
                          "typeName": {
                            "type": "Identifier",
                            "start": 33,
                            "end": 34,
                            "name": "I",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 37,
                      "end": 38,
                      "typeName": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 46,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "f",
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
                "start": 57,
                "end": 61,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 61,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "name": "I",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 63,
              "end": 75,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 65,
                  "end": 73,
                  "argument": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "EmptyStatement",
            "start": 75,
            "end": 76
          },
          {
            "type": "VariableDeclaration",
            "start": 81,
            "end": 90,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 85,
                "end": 89,
                "id": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 89,
                  "name": "i",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 88,
                      "end": 89,
                      "typeName": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 100,
            "expression": {
              "type": "CallExpression",
              "start": 95,
              "end": 99,
              "callee": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 113,
            "expression": {
              "type": "CallExpression",
              "start": 105,
              "end": 112,
              "callee": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 107,
                  "end": 111,
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 118,
            "end": 131,
            "expression": {
              "type": "CallExpression",
              "start": 118,
              "end": 130,
              "callee": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 121,
                  "end": 128,
                  "callee": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 123,
                      "end": 127,
                      "callee": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
