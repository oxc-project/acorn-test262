__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 319,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 79,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 81,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 93,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 135,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 135,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 104,
                "end": 135,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 104,
                  "end": 121,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 105,
                      "end": 120,
                      "name": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 115,
                        "end": 120,
                        "typeName": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 117,
                          "name": "I2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 117,
                          "end": 120,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 118,
                              "end": 119,
                              "typeName": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 119,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 122,
                    "end": 126,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 123,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 125,
                        "end": 126,
                        "typeName": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
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
                  "start": 128,
                  "end": 135,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 131,
                    "end": 135
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 178,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 178,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 143,
                "end": 178,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 143,
                  "end": 164,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 144,
                      "end": 163,
                      "name": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 154,
                        "end": 163,
                        "typeName": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 156,
                          "name": "I2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 156,
                          "end": 163,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 157,
                              "end": 162,
                              "typeName": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 159,
                                "name": "I2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 159,
                                "end": 162,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 160,
                                    "end": 161,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 160,
                                      "end": 161,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 165,
                    "end": 169,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 166,
                      "end": 169,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 168,
                        "end": 169,
                        "typeName": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
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
                  "start": 171,
                  "end": 178,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 174,
                    "end": 178
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 310,
      "expression": {
        "type": "AssignmentExpression",
        "start": 305,
        "end": 310,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 305,
          "end": 306,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 309,
          "end": 310,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 317,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 317,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 316,
          "end": 317,
          "name": "x",
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
