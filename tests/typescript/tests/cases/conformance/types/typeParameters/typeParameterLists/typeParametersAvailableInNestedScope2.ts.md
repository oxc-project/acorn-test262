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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
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
        "start": 12,
        "end": 18
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 22,
                "end": 23
              },
              "typeArguments": null,
              "start": 22,
              "end": 23
            },
            "start": 20,
            "end": 23
          },
          "start": 19,
          "end": 23
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 28,
                "end": 29
              },
              "typeArguments": null,
              "start": 28,
              "end": 29
            },
            "start": 26,
            "end": 29
          },
          "start": 25,
          "end": 29
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
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
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 50,
                  "end": 51
                }
              ],
              "start": 49,
              "end": 52
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 57
                    },
                    "typeArguments": null,
                    "start": 56,
                    "end": 57
                  },
                  "start": 54,
                  "end": 57
                },
                "start": 53,
                "end": 57
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 81
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
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 82,
                          "end": 83
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 82,
                        "end": 83
                      }
                    ],
                    "start": 81,
                    "end": 84
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "W",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 88,
                            "end": 89
                          },
                          "typeArguments": null,
                          "start": 88,
                          "end": 89
                        },
                        "start": 86,
                        "end": 89
                      },
                      "start": 85,
                      "end": 89
                    }
                  ],
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
                              "name": "c",
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
                                    "start": 112,
                                    "end": 113
                                  },
                                  "typeArguments": null,
                                  "start": 112,
                                  "end": 113
                                },
                                "start": 110,
                                "end": 113
                              },
                              "start": 109,
                              "end": 113
                            },
                            "init": null,
                            "definite": false,
                            "start": 109,
                            "end": 113
                          }
                        ],
                        "declare": false,
                        "start": 105,
                        "end": 114
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
                              "name": "d",
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
                                    "start": 134,
                                    "end": 135
                                  },
                                  "typeArguments": null,
                                  "start": 134,
                                  "end": 135
                                },
                                "start": 132,
                                "end": 135
                              },
                              "start": 131,
                              "end": 135
                            },
                            "init": null,
                            "definite": false,
                            "start": 131,
                            "end": 135
                          }
                        ],
                        "declare": false,
                        "start": 127,
                        "end": 136
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
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 156,
                                    "end": 157
                                  },
                                  "typeArguments": null,
                                  "start": 156,
                                  "end": 157
                                },
                                "start": 154,
                                "end": 157
                              },
                              "start": 153,
                              "end": 157
                            },
                            "init": null,
                            "definite": false,
                            "start": 153,
                            "end": 157
                          }
                        ],
                        "declare": false,
                        "start": 149,
                        "end": 158
                      }
                    ],
                    "start": 91,
                    "end": 168
                  },
                  "expression": false,
                  "start": 69,
                  "end": 168
                }
              ],
              "start": 59,
              "end": 174
            },
            "expression": false,
            "start": 37,
            "end": 174
          }
        ],
        "start": 31,
        "end": 176
      },
      "expression": false,
      "start": 0,
      "end": 176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
