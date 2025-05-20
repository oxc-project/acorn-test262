__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 86,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 86,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 27,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "pop",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 84,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 49,
                "end": 60,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 52,
                    "end": 60,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 57,
                      "end": 60,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 58,
                          "end": 59,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 59,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 57,
                      "decorators": [],
                      "name": "Stack",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 84,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 68,
                  "end": 84,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 69,
                      "end": 83,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 71,
                          "end": 76,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 72,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 72,
                            "end": 75,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 74,
                              "end": 75,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 74,
                                "end": 75,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 77,
                          "end": 81,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 77,
                            "end": 78,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 78,
                            "end": 81,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 80,
                              "end": 81,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 80,
                                "end": 81,
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 68,
                  "decorators": [],
                  "name": "Stack",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 45,
              "end": 48,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 46,
                  "end": 47,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Stack",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 88,
      "end": 178,
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 178,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 134,
            "end": 176,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 141,
                "end": 152,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 142,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 144,
                    "end": 152,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 149,
                      "end": 152,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 150,
                          "end": 151,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 151,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 149,
                      "decorators": [],
                      "name": "Stack",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 176,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 160,
                  "end": 176,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 161,
                      "end": 175,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 163,
                          "end": 168,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 164,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 164,
                            "end": 167,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 166,
                              "end": 167,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 166,
                                "end": 167,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 169,
                          "end": 173,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 170,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 170,
                            "end": 173,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 172,
                              "end": 173,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 172,
                                "end": 173,
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
                  "decorators": [],
                  "name": "Stack",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 137,
              "end": 140,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 138,
                  "end": 139,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 117,
          "end": 125,
          "expression": {
            "type": "Identifier",
            "start": 117,
            "end": 122,
            "decorators": [],
            "name": "Stack",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 122,
            "end": 125,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 105,
        "decorators": [],
        "name": "MyStack",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
