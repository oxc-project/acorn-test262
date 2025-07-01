__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 40
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 44,
                      "end": 45
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 54
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 55,
                            "end": 61
                          },
                          {
                            "type": "TSNeverKeyword",
                            "start": 63,
                            "end": 68
                          }
                        ],
                        "start": 54,
                        "end": 69
                      },
                      "start": 48,
                      "end": 69
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 44,
                    "end": 69
                  }
                ],
                "start": 43,
                "end": 70
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 87
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 105
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
                                  "start": 106,
                                  "end": 107
                                },
                                "typeArguments": null,
                                "start": 106,
                                "end": 107
                              }
                            ],
                            "start": 105,
                            "end": 108
                          },
                          "start": 97,
                          "end": 108
                        },
                        "start": 91,
                        "end": 108
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 111,
                            "end": 112
                          },
                          "typeArguments": null,
                          "start": 111,
                          "end": 112
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 113,
                            "end": 114
                          },
                          "typeArguments": null,
                          "start": 113,
                          "end": 114
                        },
                        "start": 111,
                        "end": 115
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 79,
                      "end": 118
                    },
                    "start": 77,
                    "end": 118
                  },
                  "start": 71,
                  "end": 118
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 123,
                "end": 125
              },
              "id": null,
              "generator": false,
              "start": 43,
              "end": 125
            },
            "definite": false,
            "start": 35,
            "end": 125
          }
        ],
        "declare": false,
        "start": 29,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 148
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
                "start": 149,
                "end": 150
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 159
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 160,
                      "end": 166
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 168,
                      "end": 173
                    }
                  ],
                  "start": 159,
                  "end": 174
                },
                "start": 153,
                "end": 174
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 149,
              "end": 174
            }
          ],
          "start": 148,
          "end": 175
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "schema",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 192
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 210
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
                            "start": 211,
                            "end": 212
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 212
                        }
                      ],
                      "start": 210,
                      "end": 213
                    },
                    "start": 202,
                    "end": 213
                  },
                  "start": 196,
                  "end": 213
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 217
                    },
                    "typeArguments": null,
                    "start": 216,
                    "end": 217
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 219
                    },
                    "typeArguments": null,
                    "start": 218,
                    "end": 219
                  },
                  "start": 216,
                  "end": 220
                },
                "optional": false,
                "readonly": null,
                "start": 184,
                "end": 223
              },
              "start": 182,
              "end": 223
            },
            "start": 176,
            "end": 223
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 225,
          "end": 227
        },
        "expression": false,
        "start": 134,
        "end": 227
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 127,
      "end": 227
    },
    {
      "type": "EmptyStatement",
      "start": 227,
      "end": 228
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 228
}
```
