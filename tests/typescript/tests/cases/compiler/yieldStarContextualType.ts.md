__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 50,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 50,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 17,
                "end": 50,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 17,
                  "end": 26,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 18,
                      "end": 19,
                      "name": {
                        "type": "Identifier",
                        "start": 18,
                        "end": 19,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 21,
                      "end": 22,
                      "name": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 24,
                      "end": 25,
                      "name": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
                        "decorators": [],
                        "name": "V",
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
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 32,
                    "end": 50,
                    "typeName": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 41,
                      "decorators": [],
                      "name": "Generator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 41,
                      "end": 50,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 42,
                          "end": 43,
                          "typeName": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 43,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 45,
                          "end": 46,
                          "typeName": {
                            "type": "Identifier",
                            "start": 45,
                            "end": 46,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 48,
                          "end": 49,
                          "typeName": {
                            "type": "Identifier",
                            "start": 48,
                            "end": 49,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
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
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 100,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 68,
          "end": 100,
          "typeName": {
            "type": "Identifier",
            "start": 68,
            "end": 77,
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 77,
            "end": 100,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              {
                "type": "TSVoidKeyword",
                "start": 86,
                "end": 90
              },
              {
                "type": "TSUnknownKeyword",
                "start": 92,
                "end": 99
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 166,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 107,
            "end": 129,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 113,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 115,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 118,
                  "end": 128,
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "start": 125,
                    "end": 128,
                    "callee": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 134,
            "end": 164,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 140,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 150,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 153,
                  "end": 163,
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "start": 160,
                    "end": 163,
                    "callee": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 161,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
