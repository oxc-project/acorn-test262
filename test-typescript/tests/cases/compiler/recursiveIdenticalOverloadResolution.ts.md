recursiveIdenticalOverloadResolution.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 134,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 41,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 41,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 29,
                  "end": 39,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 30,
                      "end": 34,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
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
                            "decorators": [],
                            "name": "I",
                            "optional": false
                          }
                        }
                      }
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
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 46,
            "end": 75,
            "async": false,
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
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "decorators": [],
                "name": "p",
                "optional": false,
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
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
                }
              }
            ]
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 89,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
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
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 100,
            "expression": {
              "type": "CallExpression",
              "start": 95,
              "end": 99,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 113,
            "expression": {
              "type": "CallExpression",
              "start": 105,
              "end": 112,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 107,
                  "end": 111,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 118,
            "end": 131,
            "expression": {
              "type": "CallExpression",
              "start": 118,
              "end": 130,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 121,
                  "end": 128,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 123,
                      "end": 127,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "decorators": [],
                        "name": "f",
                        "optional": false
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
