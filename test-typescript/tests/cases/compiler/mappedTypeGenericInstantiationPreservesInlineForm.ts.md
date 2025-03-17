__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 229,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 125,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 29,
        "end": 125,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 125,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 40,
              "name": "test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 43,
              "end": 125,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 71,
                  "end": 118,
                  "name": "schema",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 79,
                      "end": 118,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 86,
                        "end": 108,
                        "name": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 91,
                          "end": 108,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 97,
                            "end": 108,
                            "typeName": {
                              "type": "Identifier",
                              "start": 97,
                              "end": 105,
                              "name": "Required",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 105,
                              "end": 108,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 106,
                                  "end": 107,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 106,
                                    "end": 107,
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
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 111,
                        "end": 115,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 111,
                          "end": 112,
                          "typeName": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 113,
                          "end": 114,
                          "typeName": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 91,
                        "end": 108,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 97,
                          "end": 108,
                          "typeName": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 105,
                            "name": "Required",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 105,
                            "end": 108,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 106,
                                "end": 107,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 106,
                                  "end": 107,
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
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 125,
                "body": []
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 43,
                "end": 70,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 44,
                    "end": 69,
                    "name": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeReference",
                      "start": 48,
                      "end": 69,
                      "typeName": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 54,
                        "name": "Record",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 54,
                        "end": 69,
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
                        ]
                      }
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 127,
      "end": 227,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 134,
        "end": 227,
        "id": {
          "type": "Identifier",
          "start": 143,
          "end": 148,
          "name": "test2",
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
            "start": 176,
            "end": 223,
            "name": "schema",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 223,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 184,
                "end": 223,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 191,
                  "end": 213,
                  "name": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 196,
                    "end": 213,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 202,
                      "end": 213,
                      "typeName": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 210,
                        "name": "Required",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 210,
                        "end": 213,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 211,
                            "end": 212,
                            "typeName": {
                              "type": "Identifier",
                              "start": 211,
                              "end": 212,
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
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 216,
                  "end": 220,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 216,
                    "end": 217,
                    "typeName": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 217,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 218,
                    "end": 219,
                    "typeName": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 196,
                  "end": 213,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 202,
                    "end": 213,
                    "typeName": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 210,
                      "name": "Required",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 210,
                      "end": 213,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 211,
                          "end": 212,
                          "typeName": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 212,
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
                "key": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 225,
          "end": 227,
          "body": []
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 148,
          "end": 175,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 149,
              "end": 174,
              "name": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 153,
                "end": 174,
                "typeName": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 159,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 159,
                  "end": 174,
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
                  ]
                }
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 227,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
