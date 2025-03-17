__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
        },
        {
          "type": "Identifier",
          "start": 25,
          "end": 29,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 29,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 176,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 37,
            "end": 174,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "name": "bar",
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
                "start": 53,
                "end": 57,
                "name": "z",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 54,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 56,
                    "end": 57,
                    "typeName": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "name": "V",
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
              "start": 59,
              "end": 174,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 69,
                  "end": 168,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 81,
                    "name": "baz",
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
                      "start": 85,
                      "end": 89,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 86,
                        "end": 89,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 88,
                          "end": 89,
                          "typeName": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 89,
                            "name": "W",
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
                    "start": 91,
                    "end": 168,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 105,
                        "end": 114,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 109,
                            "end": 113,
                            "id": {
                              "type": "Identifier",
                              "start": 109,
                              "end": 113,
                              "name": "c",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 110,
                                "end": 113,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 112,
                                  "end": 113,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 112,
                                    "end": 113,
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
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 127,
                        "end": 136,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 131,
                            "end": 135,
                            "id": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 135,
                              "name": "d",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 132,
                                "end": 135,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 134,
                                  "end": 135,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 134,
                                    "end": 135,
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
                        "start": 149,
                        "end": 158,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 153,
                            "end": 157,
                            "id": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 157,
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 154,
                                "end": 157,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 156,
                                  "end": 157,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 156,
                                    "end": 157,
                                    "name": "V",
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
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 81,
                    "end": 84,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 82,
                        "end": 83,
                        "name": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 83,
                          "name": "W",
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
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 49,
              "end": 52,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 50,
                  "end": 51,
                  "name": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
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
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
