__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 32,
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
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 15,
                  "end": 18,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 16,
                      "end": 17,
                      "name": {
                        "type": "Identifier",
                        "start": 16,
                        "end": 17,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 96,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 96,
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
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 43,
                  "end": 46,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 44,
                      "end": 45,
                      "name": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 63,
            "end": 96,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 72,
              "end": 75,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 73,
                  "end": 74,
                  "name": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
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
                    "value": 42,
                    "raw": "42"
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
