__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 86,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 22,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 32,
              "end": 45,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 33,
                  "end": 44,
                  "name": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 43,
                    "end": 44,
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
                "start": 46,
                "end": 50,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 49,
                    "end": 50,
                    "typeName": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 55,
              "end": 70,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 57,
                  "end": 68,
                  "argument": {
                    "type": "Literal",
                    "start": 64,
                    "end": 68,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ReturnStatement",
            "start": 75,
            "end": 84,
            "argument": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 131,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 130,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 130,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 94,
                "end": 130,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 94,
                  "end": 100,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 95,
                      "end": 96,
                      "name": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 98,
                      "end": 99,
                      "name": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 99,
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
                    "start": 101,
                    "end": 105,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 104,
                        "end": 105,
                        "typeName": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 105,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 107,
                    "end": 124,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 124,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 113,
                        "end": 124,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 114,
                            "end": 118,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 115,
                              "end": 118,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 117,
                                "end": 118,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 118,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 120,
                          "end": 124,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 123,
                            "end": 124,
                            "typeName": {
                              "type": "Identifier",
                              "start": 123,
                              "end": 124,
                              "decorators": [],
                              "name": "W",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 126,
                  "end": 130,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "start": 132,
      "end": 159,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 140,
            "end": 158,
            "callee": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 142,
                "end": 144,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "CallExpression",
                "start": 146,
                "end": 157,
                "callee": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 147,
                  "end": 155,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 148,
                      "end": 154
                    }
                  ]
                },
                "arguments": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
