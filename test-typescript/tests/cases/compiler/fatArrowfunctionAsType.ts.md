__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 32,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 32,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 15,
                "end": 32,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 19,
                    "end": 23,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 20,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 22,
                        "end": 23,
                        "typeName": {
                          "type": "Identifier",
                          "start": 22,
                          "end": 23,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 25,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 28,
                    "end": 32
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 15,
                  "end": 18,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 16,
                      "end": 17,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 16,
                        "end": 17,
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
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 60,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 60,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 43,
                "end": 60,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 47,
                    "end": 51,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 50,
                        "end": 51,
                        "typeName": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 51,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 56,
                    "end": 60
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 43,
                  "end": 46,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 44,
                      "end": 45,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
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
          },
          "init": {
            "type": "FunctionExpression",
            "start": 63,
            "end": 96,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 82,
              "end": 96,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 84,
                  "end": 94,
                  "argument": {
                    "type": "Literal",
                    "start": 91,
                    "end": 93,
                    "raw": "42",
                    "value": 42
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
                "start": 76,
                "end": 80,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 80,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 79,
                    "end": 80,
                    "typeName": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 80,
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
              "start": 72,
              "end": 75,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 73,
                  "end": 74,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 104,
      "expression": {
        "type": "AssignmentExpression",
        "start": 98,
        "end": 103,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
