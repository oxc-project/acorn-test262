__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 214,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 30,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 45,
        "name": "Query",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
        "start": 49,
        "end": 214,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 55,
            "end": 107,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 65,
              "name": "selectMany",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 65,
              "end": 68,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 66,
                  "end": 67,
                  "name": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
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
            "params": [
              {
                "type": "Identifier",
                "start": 69,
                "end": 95,
                "name": "selector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 79,
                    "end": 95,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 87,
                        "name": "item",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 84,
                          "end": 87,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 86,
                            "end": 87,
                            "typeName": {
                              "type": "Identifier",
                              "start": 86,
                              "end": 87,
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
                      "start": 89,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 92,
                        "end": 95,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 92,
                          "end": 93,
                          "typeName": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 93,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 103,
                  "name": "Query",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 103,
                  "end": 106,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 104,
                      "end": 105,
                      "typeName": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 105,
                        "name": "U",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 112,
            "end": 212,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 122,
              "name": "selectMany",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 122,
              "end": 125,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 123,
                  "end": 124,
                  "name": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
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
            "params": [
              {
                "type": "Identifier",
                "start": 126,
                "end": 157,
                "name": "arraySelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 139,
                  "end": 157,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 141,
                    "end": 157,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 142,
                        "end": 149,
                        "name": "item",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 146,
                          "end": 149,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 148,
                            "end": 149,
                            "typeName": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 149,
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
                      "start": 151,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 154,
                        "end": 157,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 154,
                          "end": 155,
                          "typeName": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 155,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 159,
                "end": 200,
                "name": "resultSelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 173,
                  "end": 200,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 175,
                    "end": 200,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 176,
                        "end": 184,
                        "name": "outer",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 181,
                          "end": 184,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 183,
                            "end": 184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 184,
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
                        "start": 186,
                        "end": 194,
                        "name": "inner",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 191,
                          "end": 194,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 193,
                            "end": 194,
                            "typeName": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 194,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 200,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 199,
                        "end": 200,
                        "typeName": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 200,
                          "name": "R",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 208,
                  "name": "Query",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 208,
                  "end": 211,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 210,
                      "typeName": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 210,
                        "name": "R",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
