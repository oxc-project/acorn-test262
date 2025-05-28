__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 151,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 27,
            "end": 74,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 31,
              "end": 34,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 32,
                  "end": 33,
                  "name": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
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
                "start": 35,
                "end": 60,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 45,
                    "end": 60,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 46,
                        "end": 54,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
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
                              "name": "T",
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
                      "start": 56,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 59,
                        "end": 60,
                        "typeName": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 60,
                          "decorators": [],
                          "name": "U",
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
              "start": 61,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 70,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 70,
                  "end": 73,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 71,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 79,
            "end": 135,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 83,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 83,
              "end": 86,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 84,
                  "end": 85,
                  "name": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
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
                "start": 87,
                "end": 121,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 97,
                    "end": 121,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 98,
                        "end": 106,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 103,
                          "end": 106,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 105,
                            "end": 106,
                            "typeName": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 106,
                              "decorators": [],
                              "name": "T",
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
                      "start": 108,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 111,
                        "end": 121,
                        "typeName": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 118,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 118,
                          "end": 121,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 119,
                              "end": 120,
                              "typeName": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 131,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 131,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
            "type": "TSPropertySignature",
            "start": 140,
            "end": 149,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 145,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
