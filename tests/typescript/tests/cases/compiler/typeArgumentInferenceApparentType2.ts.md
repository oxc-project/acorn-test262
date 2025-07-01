__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "method",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "iterable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterable",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 37
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 39
                    },
                    "typeArguments": null,
                    "start": 38,
                    "end": 39
                  }
                ],
                "start": 37,
                "end": 40
              },
              "start": 29,
              "end": 40
            },
            "start": 27,
            "end": 40
          },
          "start": 19,
          "end": 40
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "typeArguments": null,
          "start": 43,
          "end": 44
        },
        "start": 41,
        "end": 44
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 65
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 67
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 84
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 85,
                            "end": 86
                          },
                          "typeArguments": null,
                          "start": 85,
                          "end": 86
                        }
                      ],
                      "start": 84,
                      "end": 87
                    },
                    "start": 76,
                    "end": 87
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 66,
                  "end": 87
                }
              ],
              "start": 65,
              "end": 88
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 108,
                              "end": 109
                            },
                            "typeArguments": null,
                            "start": 108,
                            "end": 109
                          },
                          "start": 106,
                          "end": 109
                        },
                        "start": 105,
                        "end": 109
                      },
                      "init": null,
                      "definite": false,
                      "start": 105,
                      "end": 109
                    }
                  ],
                  "declare": false,
                  "start": 101,
                  "end": 110
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "res",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 128,
                              "end": 129
                            },
                            "typeArguments": null,
                            "start": 128,
                            "end": 129
                          },
                          "start": 126,
                          "end": 129
                        },
                        "start": 123,
                        "end": 129
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 138
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 139,
                            "end": 140
                          }
                        ],
                        "optional": false,
                        "start": 132,
                        "end": 141
                      },
                      "definite": false,
                      "start": 123,
                      "end": 141
                    }
                  ],
                  "declare": false,
                  "start": 119,
                  "end": 142
                }
              ],
              "start": 91,
              "end": 148
            },
            "expression": false,
            "start": 51,
            "end": 148
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 153,
            "end": 160
          }
        ],
        "start": 45,
        "end": 162
      },
      "expression": false,
      "start": 0,
      "end": 162
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 162
}
```
