__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 79
      },
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
              "start": 80,
              "end": 81
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 81
          }
        ],
        "start": 79,
        "end": 82
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
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
                  "start": 92,
                  "end": 93
                },
                "typeArguments": null,
                "start": 92,
                "end": 93
              },
              "start": 90,
              "end": 93
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 93
          }
        ],
        "start": 83,
        "end": 95
      },
      "declare": false,
      "start": 67,
      "end": 95
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 105,
                        "end": 106
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 115,
                          "end": 117
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
                                "start": 118,
                                "end": 119
                              },
                              "typeArguments": null,
                              "start": 118,
                              "end": 119
                            }
                          ],
                          "start": 117,
                          "end": 120
                        },
                        "start": 115,
                        "end": 120
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 105,
                      "end": 120
                    }
                  ],
                  "start": 104,
                  "end": 121
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 126
                        },
                        "typeArguments": null,
                        "start": 125,
                        "end": 126
                      },
                      "start": 123,
                      "end": 126
                    },
                    "start": 122,
                    "end": 126
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 131,
                    "end": 135
                  },
                  "start": 128,
                  "end": 135
                },
                "start": 104,
                "end": 135
              },
              "start": 102,
              "end": 135
            },
            "start": 101,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 101,
          "end": 135
        }
      ],
      "declare": false,
      "start": 97,
      "end": 135
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 144,
                        "end": 145
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 156
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 159
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
                                      "start": 160,
                                      "end": 161
                                    },
                                    "typeArguments": null,
                                    "start": 160,
                                    "end": 161
                                  }
                                ],
                                "start": 159,
                                "end": 162
                              },
                              "start": 157,
                              "end": 162
                            }
                          ],
                          "start": 156,
                          "end": 163
                        },
                        "start": 154,
                        "end": 163
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 144,
                      "end": 163
                    }
                  ],
                  "start": 143,
                  "end": 164
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 169
                        },
                        "typeArguments": null,
                        "start": 168,
                        "end": 169
                      },
                      "start": 166,
                      "end": 169
                    },
                    "start": 165,
                    "end": 169
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 174,
                    "end": 178
                  },
                  "start": 171,
                  "end": 178
                },
                "start": 143,
                "end": 178
              },
              "start": 141,
              "end": 178
            },
            "start": 140,
            "end": 178
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 178
        }
      ],
      "declare": false,
      "start": 136,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 306
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 309,
          "end": 310
        },
        "start": 305,
        "end": 310
      },
      "directive": null,
      "start": 305,
      "end": 310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 316,
          "end": 317
        },
        "start": 312,
        "end": 317
      },
      "directive": null,
      "start": 312,
      "end": 317
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 318
}
```
