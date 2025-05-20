__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 162,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 162,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 51,
            "end": 148,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 91,
              "end": 148,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 101,
                  "end": 110,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 105,
                      "end": 109,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 109,
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 106,
                          "end": 109,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 108,
                            "end": 109,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 108,
                              "end": 109,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
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
                  "type": "VariableDeclaration",
                  "start": 119,
                  "end": 142,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 123,
                      "end": 141,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 129,
                        "decorators": [],
                        "name": "res",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 126,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 128,
                            "end": 129,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 128,
                              "end": 129,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 132,
                        "end": 141,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 138,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 65,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 65,
              "end": 88,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 66,
                  "end": 87,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 87,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 84,
                      "end": 87,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 85,
                          "end": 86,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 86,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 84,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 153,
            "end": 160,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "method",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 40,
          "decorators": [],
          "name": "iterable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 40,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 40,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 37,
                "end": 40,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 39,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "decorators": [],
                "name": "Iterable",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 41,
        "end": 44,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 43,
          "end": 44,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
