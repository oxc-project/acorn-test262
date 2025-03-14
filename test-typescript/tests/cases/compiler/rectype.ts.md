__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 140,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 140,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 39,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 39,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 29,
                  "end": 37,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 30,
                      "end": 33,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 31,
                        "end": 33,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 32,
                          "end": 33,
                          "typeName": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 33,
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
                    "start": 34,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 35,
                      "end": 36,
                      "typeName": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
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
            "type": "ExportNamedDeclaration",
            "start": 45,
            "end": 81,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 52,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 81,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 71,
                    "end": 79,
                    "argument": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
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
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 67,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 81,
            "end": 82
          },
          {
            "type": "VariableDeclaration",
            "start": 88,
            "end": 96,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 92,
                "end": 95,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 95,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 95,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 94,
                      "end": 95,
                      "typeName": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
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
            "start": 102,
            "end": 107,
            "expression": {
              "type": "CallExpression",
              "start": 102,
              "end": 106,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 112,
            "end": 120,
            "expression": {
              "type": "CallExpression",
              "start": 112,
              "end": 119,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 114,
                  "end": 118,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 125,
            "end": 138,
            "expression": {
              "type": "CallExpression",
              "start": 125,
              "end": 137,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 128,
                  "end": 135,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 130,
                      "end": 134,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "decorators": [],
                        "name": "f",
                        "optional": false
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
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
  "sourceType": "script",
  "hashbang": null
}
```
