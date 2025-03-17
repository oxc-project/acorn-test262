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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 50,
            "name": "g",
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 21,
                      "end": 22,
                      "name": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "V",
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
                      "name": "Generator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "V",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
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
      "kind": "const",
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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 166,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 107,
            "end": 129,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 113,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 115,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 134,
            "end": 164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 140,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 150,
                  "name": "x2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "Generator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
