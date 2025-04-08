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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "method",
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
          "start": 19,
          "end": 40,
          "name": "iterable",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 40,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 40,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "name": "Iterable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 37,
                "end": 40,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 39,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 162,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 51,
            "end": 148,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 65,
              "name": "inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 109,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 106,
                          "end": 109,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 108,
                            "end": 109,
                            "typeName": {
                              "type": "Identifier",
                              "start": 108,
                              "end": 109,
                              "name": "U",
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
                  "type": "VariableDeclaration",
                  "start": 119,
                  "end": 142,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 123,
                      "end": 141,
                      "id": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 129,
                        "name": "res",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 126,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 128,
                            "end": 129,
                            "typeName": {
                              "type": "Identifier",
                              "start": 128,
                              "end": 129,
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
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 132,
                        "end": 141,
                        "callee": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 138,
                          "name": "method",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "name": "u",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 65,
              "end": 88,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 66,
                  "end": 87,
                  "name": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 87,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 84,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 84,
                      "end": 87,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 85,
                          "end": 86,
                          "typeName": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 86,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 41,
        "end": 44,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 43,
          "end": 44,
          "typeName": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
