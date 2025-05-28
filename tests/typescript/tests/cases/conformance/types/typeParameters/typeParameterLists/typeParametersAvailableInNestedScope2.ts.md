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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
        },
        {
          "type": "Identifier",
          "start": 25,
          "end": 29,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "decorators": [],
                "name": "U",
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
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
            "params": [
              {
                "type": "Identifier",
                "start": 53,
                "end": 57,
                "decorators": [],
                "name": "z",
                "optional": false,
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
                      "decorators": [],
                      "name": "V",
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
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
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
                          "decorators": [],
                          "name": "W",
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
                      "start": 85,
                      "end": 89,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
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
                            "decorators": [],
                            "name": "W",
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
                    "start": 91,
                    "end": 168,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 105,
                        "end": 114,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 109,
                            "end": 113,
                            "id": {
                              "type": "Identifier",
                              "start": 109,
                              "end": 113,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 127,
                        "end": 136,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 131,
                            "end": 135,
                            "id": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 135,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 149,
                        "end": 158,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 153,
                            "end": 157,
                            "id": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 157,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "expression": false
                }
              ]
            },
            "expression": false
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
