arithmeticOnInvalidTypes2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 133,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 133,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 42,
                  "end": 57,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 46,
                      "end": 56,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 48,
                        "decorators": [],
                        "name": "z1",
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 51,
                        "end": 56,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 52,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 62,
                  "end": 77,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 66,
                      "end": 76,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 68,
                        "decorators": [],
                        "name": "z2",
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 71,
                        "end": 76,
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 72,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 76,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 97,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 86,
                      "end": 96,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 88,
                        "decorators": [],
                        "name": "z3",
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 91,
                        "end": 96,
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 102,
                  "end": 117,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 106,
                      "end": 116,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 108,
                        "decorators": [],
                        "name": "z4",
                        "optional": false
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "start": 111,
                        "end": 116,
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 112,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 122,
                  "end": 131,
                  "argument": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "a",
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
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 28,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 25,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 27,
                    "end": 28,
                    "typeName": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 28,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 30,
                "end": 34,
                "decorators": [],
                "name": "b",
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
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 20,
              "end": 23,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 21,
                  "end": 22,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
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
