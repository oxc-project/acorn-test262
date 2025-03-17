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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 32,
            "name": "b",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                    "name": "x",
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
                          "name": "T",
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
                  "start": 25,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 28,
                    "end": 32
                  }
                }
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
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 60,
            "name": "c",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                    "name": "x",
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
                          "name": "T",
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
                  "start": 53,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 56,
                    "end": 60
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 63,
            "end": 96,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 80,
                "name": "x",
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
                      "name": "T",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
